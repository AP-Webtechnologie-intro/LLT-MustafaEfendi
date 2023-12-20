
let map = L.map('apMap').setView([51.2307089498369, 4.416004038075422], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.setView






// bepaal de rechthoek rondom het gebouw van AP
let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];

// kleur de rechthoek in met de rode AP-kleur
L.rectangle(bounds, {color: "#ff0000", weight: 1}).addTo(map);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let marker = L.marker([51.23009,4.41616]).addTo(map)    

marker
.bindPopup(`
<p>
<strong>Antwerpse Foodies</strong>
</p>
<strong>Mustafa Vermeulen</strong>
</p>
<p>
<strong>Joske Selvi</strong>
</p>
<p>
<address>Ellermanstraat 33</address>
</p>
`)
.openPopup();

