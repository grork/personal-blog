---
title: "Learning Swift"
description: "While making a concerted effort to learn Swift properly, I finally understood an unexpected pattern I saw with extensions"
tags: [ "learning", "programming", "software", "swift" ]
---

I’ve been reading Swift for a while, even wrote a little bit of code in it at a previous employer. But I’ve never taken the time to *learn* it. I’ve been reading “[The Swift Programming Guide](https://docs.swift.org/swift-book/)” (aka Apple official book) for a couple years (on and off). I recently started to work through Apples “[Intro to App Dev](https://developer.apple.com/tutorials/app-dev-training/getting-started-with-scrumdinger)” ‘course’. Everything has been pretty reasonable, but a couple things have caused me to raise an eyebrow. One was the whole existential / [opaque](https://docs.swift.org/swift-book/LanguageGuide/OpaqueTypes.html) / `some` / `any` complexity — but, reading the chapters it became clear that these are choices made by the compiler team for optimization & safety reasons. All good. The other was `extension` ([doc](https://docs.swift.org/swift-book/LanguageGuide/Extensions.html)) – that was not so clear.

The `extension` language feature is brain-dead simple, and can be super powerful. Basically, you can enhance an existing type with additional convenience properties/fields. It even lets you adopt a protocol (aka interface) for a type you don’t own from another library – *magic*!

**But** there was a common pattern in the docs, sample code, and ‘production’ code (employer, Open Source) that I didn’t *really* grok. It went something like this (all in one source file):
```swift
struct Building {
    var name: String
    var occupants: Int
}

extension Building {
    static var HeadOffice = Building("HQ", 1)
}

extension Building {
    func getDisplayableData() {
        return "\(self.name) has (self.occupants) employees"
    }
}
```

I kept seeing it, and it didn’t seem to jive with *extending* something you didn’t own. I'd also see:
```swift
struct SomeType: ABaseType { … }

extension ABaseType where Self == SomeType {
    static var aNewField = SomeType()
}
```

And I didn’t grok that *either*. Some googling, some re-reading of the `extension` book section, I noticed one sentence:
> Extensions can also be used to help with code organization.

I was like ‘it can’t be that? Surely co-locating with the type declaration makes more sense?’.

Sure enough, going through some of the sample code from the linked course, I removed all but one of the extensions:
1. The first example above really could have just been written as part of the struct, and not separated out into these extension thingies. I didn't need to change the calling code!

```swift
struct Building {
    static var HeadOffice = Foo("HQ", 1)
    
    var name: String
    var occupants: Int
    
    func getDisplayableData() {
        return "\(self.name) has (self.occupants) employees"
    }
}
```

{:start="2"}
2. The `extension ABaseType where Self == SomeType` case is clearer — when the type is known in swift, you can omit the type qualifier. e.g. `func thing(do: AnotherType)` can be called `thing(do: .staticOnAnotherType)`. If you use the `where` extension from above you are effectively adding to that type for lexical reasons too, allowing you to omit typing the full type (your type). So people use that pattern to allow the syntactically shorter referencing. I had to add the type qualifier to the member reference to be able to remove that extension.

In my experiment, I didn’t remove type-scoped extension — it extends `Array` when constrained to a concrete type, so it has a convenience method to convert to another type.

And so concludes Dominic’s Sunday “Learning Things” useless insights.
