
let map = L.map('zurenMap').setView([51.2025058, 4.430168073981476], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.setView






// bepaal de rechthoek rondom het gebouw van AP
//let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

// kleur de rechthoek in met de rode AP-kleur
//L.rectangle(bounds, {color: "#ff0000", weight: 1}).addTo(map);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let marker = L.marker([51.207461932804, 4.429785598810675]).addTo(map)    

marker
.bindPopup(`
<p>
<strong>Tranquillo</strong>
</p>
<strong>Authentic Mexican Street Food</strong>
</p>
<p>
<address>Dageraadplaats 21</address>
</p>
`)
.openPopup();

