---
enable: true
badge: "Kontak"
title: "Punya proyek? Mari kita bicara."
description: "Baik Anda membutuhkan website, aplikasi mobile, atau infrastruktur hosting, tim kami siap membantu Anda."
image: "/images/about/about-rated-pic.jpg"
imageAlt: "Kontak"
characterImage: "/images/character-3d.png"
characterImageAlt: "Karakter 3D"

form:
  emailSubject: "Pengajuan baru dari formulir kontak Akordium"
  submitButton:
    enable: true
    label: "Kirim Pesan"
  inputs:
    - label: "Nama Lengkap"
      placeholder: "Nama Lengkap *"
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
    - label: "Nomor Telepon"
      placeholder: "Nomor Telepon"
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
          - label: "Lainnya"
            value: "Other"
            selected: false
    - label: "Departemen Terkait"
      placeholder: "Pilih Departemen *"
      name: "Department Search"
      required: true
      halfWidth: true
      dropdown:
        type: "search"
        search:
          placeholder: "Cari Departemen..."
        items:
          - label: "Dukungan Pelanggan"
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
      placeholder: "Ajukan pertanyaan Anda *"
      name: "Message"
      required: true
      halfWidth: false
      rows: "4"
      defaultValue: ""
    - label: "Google Search"
      checked: false
      name: "User Source"
      required: true
      groupLabel: "Bagaimana Anda tahu tentang kami?"
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
    - label: "Saya menyetujui [Syarat & Ketentuan](/)"
      name: "Agreed Privacy"
      value: "Agreed"
      checked: false
      required: true
      type: "checkbox"
      halfWidth: false
      defaultValue: ""
    - note: success
      parentClass: "hidden text-sm message success"
      content: "Pesan Anda telah kami terima! Kami akan menghubungi Anda secepatnya."
    - note: deprecated
      parentClass: "hidden text-sm message error"
      content: "Terjadi kesalahan! Silakan coba lagi."
---
