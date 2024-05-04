---
type: PageLayout
title: About Us
sections:
  - type: GenericSection
    title:
      type: TitleBlock
      text: Welcome
      color: text-dark
    subtitle: ಸ್ವಾಗತ | സ്വാഗതം | స్వాగతం | வணக்கம்
    text: |
      We are a small business that thrives on care and excellence
    actions: []
    media:
      type: ImageBlock
      url: /images/hero2.svg
      altText: Fun feature preview
    badge:
      type: Badge
      label: About US
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
  - type: FeaturedPeopleSection
    title:
      type: TitleBlock
      text: Meet the team
      color: text-dark
      styles:
        self:
          textAlign: center
    people:
      - content/data/person1.json
      - content/data/person2.json
      - content/data/person4.json
    actions: []
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
slug: about-us
isDraft: false
seo:
  type: Seo
  metaTitle: Landing Page
  metaDescription: Write here your new page's description including most relevant keywords.
  addTitleSuffix: true
  socialImage: /images/main-hero.jpg
  metaTags: []
---
