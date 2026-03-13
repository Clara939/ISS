<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0D1B2A&text=ISS%20Tracker&height=120&section=header&fontColor=FFFFFF"/>
</p>

# 🚀 **ISS Tracker – Suivi en temps réel**

**Tracker live de la Station Spatiale Internationale** avec **API temps réel** + **carte satellite animée**.  
L'ISS se déplace sur la carte en direct ! 🌍🛰️

<div align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira%20Code&size=24&pause=800&color=415A77&background=F1FF0000&width=600&height=50&lines=API+Open%20Notify%20wheretheiss.at;Leaflet+JS+carte+satellite;Position+ISS+live+%F0%9F%9A%80" />
</div>

---

## 🌌 **Fonctionnalités**
- 🛰️ **Position ISS temps réel** via API `wheretheiss.at` ou `open-notify.org`
- 🗺️ **Carte satellite interactive** (Leaflet.js)
- 🔄 **Marker ISS animé** qui suit la trajectoire live
- 📍 **Coordonnées précises** (lat/lng) + vitesse
- 🌅 **Background spatial** avec `iss_back.jpg`
- 📱 **Responsive** desktop/mobile

---

## 🧩 **Stack technique**

🌐 API : WhereTheISS.at / Open-Notify.org
🗺️ Maps : Leaflet.js satellite tiles
⚡ 100% Vanilla JavaScript
🎨 CSS Flexbox + background-image

---

## 🎨 **Design spatial**

🌑 Fond : iss_back.jpg (spatial)
🤍 Texte : Blanc pur
🖤 Palette : 0D1B2A, 415A77 (bleu nuit)


---

## 🔧 **Code clé**
```javascript
// Fetch position ISS live
fetch('https://api.wheretheiss.at/v1/satellites/25544')
  .then(res => res.json())
  .then(data => {
    // Update marker Leaflet
    issMarker.setLatLng([data.latitude, data.longitude]);
  });
```
##🎯 **Skills démontrés**

    🌐 API REST fetch() + JSON parsing [web:93]

    🗺️ Leaflet.js maps + markers dynamiques

    ⚡ Real-time updates position satellite

    📱 Responsive design spatial

<div align="center"> <img src="https://img.shields.io/badge/Tech-API%20Leaflet%20VanillaJS-0D1B2A?style=flat&logo=leaflet&logoColor=white"/> <img src="https://img.shields.io/badge/Live-%F0%9F%9A%80%20ISS-415A77?style=flat&logo=public-api&logoColor=white"/> </div>

<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=0D1B2A&height=100&section=footer&fontColor=FFFFFF"/>
</p> ```
