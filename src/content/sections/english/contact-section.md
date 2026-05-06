---
enable: true
badge: "Contact"
title: "Have a project in mind? Let's talk."
description: "Whether you need a website, mobile app, or hosting infrastructure, our team is ready to help you."
image: "/images/contact-home.jpg"
imageAlt: "Contact"
characterImage: "/images/character-3d.png"
characterImageAlt: "3D character"

form:
  emailSubject: "New Akordium contact form submission"
  submitButton:
    enable: true
    label: "Send Message"
  inputs:
    - label: "Full Name"
      placeholder: "Full Name *"
      name: "Full Name"
      required: true
      halfWidth: true
      defaultValue: ""
    - label: "Email Address"
      placeholder: "Email Address *"
      name: "Email Address"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - label: "Phone Number"
      placeholder: "Phone Number"
      name: "Phone Number"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Company"
      placeholder: "Company"
      name: "Company"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Subject"
      placeholder: "Subject *"
      name: "Subject"
      required: true
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "Web Development"
            value: "Web Development"
            selected: false
          - label: "App Development"
            value: "App Development"
            selected: false
          - label: "Hosting & Infrastructure"
            value: "Hosting & Infrastructure"
            selected: false
          - label: "Other"
            value: "Other"
            selected: false
    - label: "Related Department"
      placeholder: "Select Department *"
      name: "Department Search"
      required: true
      halfWidth: true
      dropdown:
        type: "search"
        search:
          placeholder: "Search Departments..."
        items:
          - label: "Customer Support"
            value: "Customer Support"
            selected: false
          - label: "Sales & Finance"
            value: "Sales & Finance"
            selected: false
          - label: "Technical Assistance"
            value: "Technical Assistance"
            selected: false
          - label: "Partnerships"
            value: "Partnerships"
            selected: false
    - label: "Message"
      tag: "textarea"
      placeholder: "Ask your question *"
      name: "Message"
      required: true
      halfWidth: false
      rows: "4"
      defaultValue: ""
    - label: "Google Search"
      checked: false
      name: "User Source"
      required: true
      groupLabel: "How did you hear about us?"
      group: "source"
      type: "radio"
      halfWidth: true
      defaultValue: ""
    - label: "Social Media"
      name: "User Source"
      required: true
      group: "source"
      type: "radio"
      halfWidth: true
      defaultValue: ""
    - label: "Referral"
      name: "User Source"
      required: true
      group: "source"
      type: "radio"
      halfWidth: true
      defaultValue: ""
    - label: "I agree to the [Terms & Conditions](/)"
      name: "Agreed Privacy"
      value: "Agreed"
      checked: false
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""
    - note: success
      parentClass: "hidden text-sm message success"
      content: "We have received your message! We'll get back to you as soon as possible."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Something went wrong! Please try again."
---
