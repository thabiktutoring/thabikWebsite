{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Smooth Scroll for Navigation\
document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
    anchor.addEventListener('click', function (e) \{\
        e.preventDefault();\
        document.querySelector(this.getAttribute('href')).scrollIntoView(\{\
            behavior: 'smooth'\
        \});\
    \});\
\});\
\
// Form Submission Handling\
const collabForm = document.getElementById('collab-form');\
\
collabForm.addEventListener('submit', (e) => \{\
    e.preventDefault();\
    \
    // In a real scenario, you'd use fetch() to send this to a backend\
    const formData = new FormData(collabForm);\
    alert('Thank you for reaching out! We will contact you soon.');\
    collabForm.reset();\
\});\
\
// Simple Header Scroll Effect\
window.addEventListener('scroll', () => \{\
    const nav = document.querySelector('.navbar');\
    if (window.scrollY > 50) \{\
        nav.style.background = 'rgba(229, 228, 222, 0.95)';\
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';\
    \} else \{\
        nav.style.background = 'transparent';\
        nav.style.boxShadow = 'none';\
    \}\
\});}