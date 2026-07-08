import L from "leaflet";

export const pinIcon = L.divIcon({
    className: "",
    html: `
    <div style="position: relative; width: 20px; height: 20px;">
     
      <div class="leaflet-loading-pulse"
           style="
             position: absolute;
             width: 30px;
             height: 30px;
             border-radius: 50%;
             background: #16a34a;
           ">
      </div>

      <div style="
             position: absolute;
             width: 20px;
             height: 20px;
             top: 5px;
             left: 5px;
             border-radius: 50%;
             background: #16a34a;
             border: 2px solid white;
           ">
      </div>

    </div>
  `,
    iconSize: [32, 32],
    iconAnchor: [10, 10],
});