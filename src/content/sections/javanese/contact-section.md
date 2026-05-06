---
enable: true
badge: "Kontak"
title: "Duwe proyek? Ayo rembugan."
description: "Apa sampeyan butuh website, aplikasi mobile, utawa infrastruktur hosting, tim awake dhewe siap mbantu."
image: "/images/about/about-rated-pic.jpg"
imageAlt: "Kontak"
characterImage: "/images/character-3d.png"
characterImageAlt: "Karakter 3D"

form:
  emailSubject: "Kiriman anyar saka formulir kontak Akordium"
  submitButton:
    enable: true
    label: "Kirim Pesan"
  inputs:
    - label: "Jeneng Lengkap"
      placeholder: "Jeneng Lengkap *"
      name: "Full Name"
      required: true
      halfWidth: true
      defaultValue: ""
    - label: "Alamat Email"
      placeholder: "Alamat Email *"
      name: "Email Address"
      required: true
      type: "email"
      halfWidth: true
      defaultValue: ""
    - label: "Nomer Telepon"
      placeholder: "Nomer Telepon"
      name: "Phone Number"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Perusahaan"
      placeholder: "Perusahaan"
      name: "Company"
      required: false
      type: "text"
      halfWidth: true
      defaultValue: ""
    - label: "Subjek"
      placeholder: "Subjek *"
      name: "Subject"
      required: true
      halfWidth: true
      dropdown:
        type: "select"
        items:
          - label: "Pengembangan Web"
            value: "Web Development"
            selected: false
          - label: "Pengembangan Aplikasi"
            value: "App Development"
            selected: false
          - label: "Hosting & Infrastruktur"
            value: "Hosting & Infrastructure"
            selected: false
          - label: "Liyane"
            value: "Other"
            selected: false
    - label: "Departemen Gegayutan"
      placeholder: "Pilih Departemen *"
      name: "Department Search"
      required: true
      halfWidth: true
      dropdown:
        type: "search"
        search:
          placeholder: "Golek Departemen..."
        items:
          - label: "Dhukungan Pelanggan"
            value: "Customer Support"
            selected: false
          - label: "Penjualan & Keuangan"
            value: "Sales & Finance"
            selected: false
          - label: "Bantuan Teknis"
            value: "Technical Assistance"
            selected: false
          - label: "Kemitraan"
            value: "Partnerships"
            selected: false
    - label: "Pesan"
      tag: "textarea"
      placeholder: "Takon pitakonan sampeyan *"
      name: "Message"
      required: true
      halfWidth: false
      rows: "4"
      defaultValue: ""
    - label: "Google Search"
      checked: false
      name: "User Source"
      required: true
      groupLabel: "Piye carane sampeyan ngerti awake dhewe?"
      group: "source"
      type: "radio"
      halfWidth: true
      defaultValue: ""
    - label: "Media Sosial"
      name: "User Source"
      required: true
      group: "source"
      type: "radio"
      halfWidth: true
      defaultValue: ""
    - label: "Referensi"
      name: "User Source"
      required: true
      group: "source"
      type: "radio"
      halfWidth: true
      defaultValue: ""
    - label: "Aku setuju karo [Syarat & Ketentuan](/)"
      name: "Agreed Privacy"
      value: "Agreed"
      checked: false
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""
    - note: success
      parentClass: "hidden text-sm message success"
      content: "Pesan sampeyan wis ditampa! Awake dhewe bakal ngubungi sampeyan sakcepete."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Ana masalah! Coba maneh."
---
