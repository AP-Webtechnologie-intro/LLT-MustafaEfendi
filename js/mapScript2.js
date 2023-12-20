
let map = L.map('chinaMap').setView([51.21763234094055, 4.420453832257043], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.setView






// bepaal de rechthoek rondom de chinatown
//let bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
let bounds = [[51.221301789113966, 4.420060230890564], [51.219118840390706, 4.420914396139129]]

// kleur de rechthoek in met de rode 
L.rectangle(bounds, {color: "#ff0000", weight: 1}).addTo(map);

// plaats een marker met als tekst "Bai Wei" en eronder adres
let marker = L.marker([51.2198243515613, 4.420570019476231]).addTo(map)    

marker
.bindPopup(`
<p>
<strong>Bai Wei</strong>
</p>

<p>
<address>Van Wesenbekestraat 21, 2060 Antwerpen</address>
</p>
`)
.openPopup();

