import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Language } from '../slidesData';

export interface MapPoint {
  id: string;
  name: string;
  location: string;
  island: 'Jawa' | 'Sumatera' | 'Kalimantan' | 'Sulawesi' | 'Papua' | 'Bali-Nusa Tenggara' | 'Maluku';
  category: 'fsi' | 'oilgas' | 'gov' | 'astra';
  coords: [number, number]; // [lat, lng]
}

export const MAP_POINTS: MapPoint[] = [
  // --- DKI JAKARTA & JABODETABEK (DENSE CONCENTRATION - MAJOR ACCOUNTS) ---
  { id: 'jkt-astra-hq', name: 'PT Astra Graphia Tbk & Astra Group HQ', location: 'Kramat Raya & Sunter, Jakarta', island: 'Jawa', category: 'astra', coords: [-6.1852, 106.8458] },
  { id: 'jkt-mandiri', name: 'PT Bank Mandiri (Persero) Tbk HQ', location: 'Plaza Mandiri, Gatot Subroto, Jakarta', island: 'Jawa', category: 'fsi', coords: [-6.2285, 106.8188] },
  { id: 'jkt-bri', name: 'PT Bank Rakyat Indonesia (Persero) Tbk HQ', location: 'Gedung BRI, Sudirman, Jakarta', island: 'Jawa', category: 'fsi', coords: [-6.2163, 106.8152] },
  { id: 'jkt-bca', name: 'PT Bank Central Asia Tbk HQ', location: 'Menara BCA, Thamrin, Jakarta', island: 'Jawa', category: 'fsi', coords: [-6.1954, 106.8227] },
  { id: 'jkt-bni', name: 'PT Bank Negara Indonesia (Persero) Tbk HQ', location: 'Grha BNI 46, Sudirman, Jakarta', island: 'Jawa', category: 'fsi', coords: [-6.2023, 106.8222] },
  { id: 'jkt-bi', name: 'Bank Indonesia (BI HQ)', location: 'MH Thamrin No. 2, Jakarta', island: 'Jawa', category: 'gov', coords: [-6.1817, 106.8225] },
  { id: 'jkt-ojk', name: 'Otoritas Jasa Keuangan (OJK HQ)', location: 'Lapangan Banteng & Wisma Mulia, Jakarta', island: 'Jawa', category: 'gov', coords: [-6.2365, 106.8229] },
  { id: 'jkt-kemenkeu', name: 'Kementerian Keuangan RI', location: 'Lapangan Banteng Timur, Jakarta', island: 'Jawa', category: 'gov', coords: [-6.1706, 106.8372] },
  { id: 'jkt-pertamina', name: 'PT Pertamina (Persero) HQ', location: 'Medan Merdeka Timur, Jakarta', island: 'Jawa', category: 'oilgas', coords: [-6.1772, 106.8327] },
  { id: 'jkt-medco', name: 'Medco Energi Internasional Tbk HQ', location: 'The Energy Building, SCBD, Jakarta', island: 'Jawa', category: 'oilgas', coords: [-6.2268, 106.8085] },
  { id: 'jkt-skkmigas', name: 'SKK Migas HQ', location: 'Gatot Subroto, Jakarta', island: 'Jawa', category: 'oilgas', coords: [-6.2372, 106.8239] },
  { id: 'jkt-bsi', name: 'PT Bank Syariah Indonesia Tbk HQ', location: 'The Tower, Gatot Subroto, Jakarta', island: 'Jawa', category: 'fsi', coords: [-6.2248, 106.8248] },
  { id: 'jkt-btn', name: 'PT Bank Tabungan Negara (Persero) Tbk HQ', location: 'Harmoni, Jakarta', island: 'Jawa', category: 'fsi', coords: [-6.1664, 106.8202] },
  { id: 'jkt-komdigi', name: 'Kementerian Komunikasi dan Digital RI', location: 'Medan Merdeka Barat, Jakarta', island: 'Jawa', category: 'gov', coords: [-6.1764, 106.8222] },

  // --- JAWA LAINNYA ---
  { id: 'jbr-bandung', name: 'Bank BJB HQ (Jawa Barat)', location: 'Bandung, Jawa Barat', island: 'Jawa', category: 'fsi', coords: [-6.9175, 107.6191] },
  { id: 'jtg-semarang', name: 'Bank Jateng HQ', location: 'Semarang, Jawa Tengah', island: 'Jawa', category: 'fsi', coords: [-6.9932, 110.4203] },
  { id: 'diy-jogja', name: 'Bank BPD DIY HQ', location: 'Yogyakarta, DI Yogyakarta', island: 'Jawa', category: 'fsi', coords: [-7.7956, 110.3695] },
  { id: 'jtm-surabaya', name: 'Bank Jatim HQ & Pertamina Hulu Energi Jatim', location: 'Surabaya, Jawa Timur', island: 'Jawa', category: 'fsi', coords: [-7.2575, 112.7521] },
  { id: 'btn-serang', name: 'Bank Banten & Kawasan Industri Cilegon', location: 'Serang, Banten', island: 'Jawa', category: 'fsi', coords: [-6.1104, 106.1640] },

  // --- SUMATERA (5 PULAU BESAR) ---
  { id: 'sumut-medan', name: 'Bank Sumut HQ & Kawasan Industri Medan', location: 'Medan, Sumatera Utara', island: 'Sumatera', category: 'fsi', coords: [3.5952, 98.6722] },
  { id: 'aceh-banda', name: 'Bank Aceh Syariah HQ', location: 'Banda Aceh, Aceh', island: 'Sumatera', category: 'fsi', coords: [5.5483, 95.3238] },
  { id: 'riau-pekanbaru', name: 'Bank Riau Kepri Syariah & Pertamina Hulu Rokan', location: 'Pekanbaru, Riau', island: 'Sumatera', category: 'oilgas', coords: [0.5071, 101.4478] },
  { id: 'kepri-batam', name: 'Batam FTZ & Regional FinTech Gateway', location: 'Batam, Kepulauan Riau', island: 'Sumatera', category: 'astra', coords: [1.1301, 104.0529] },
  { id: 'sumbar-padang', name: 'Bank Nagari HQ', location: 'Padang, Sumatera Barat', island: 'Sumatera', category: 'fsi', coords: [-0.9471, 100.4172] },
  { id: 'sumsel-palembang', name: 'Bank Sumsel Babel HQ & PT Bukit Asam', location: 'Palembang, Sumatera Selatan', island: 'Sumatera', category: 'fsi', coords: [-2.9761, 104.7754] },
  { id: 'lampung-bandar', name: 'Bank Lampung HQ', location: 'Bandar Lampung, Lampung', island: 'Sumatera', category: 'fsi', coords: [-5.4500, 105.2667] },

  // --- KALIMANTAN (5 PULAU BESAR) ---
  { id: 'kaltim-balikpapan', name: 'Kilang Pertamina RDMP Balikpapan', location: 'Balikpapan, Kalimantan Timur', island: 'Kalimantan', category: 'oilgas', coords: [-1.2654, 116.8312] },
  { id: 'ikn-nusantara', name: 'Ibu Kota Nusantara (IKN Core Area)', location: 'Sepaku, Penajam Paser Utara', island: 'Kalimantan', category: 'gov', coords: [-0.9625, 116.7028] },
  { id: 'kaltim-samarinda', name: 'Bank BPD Kaltimtara HQ', location: 'Samarinda, Kalimantan Timur', island: 'Kalimantan', category: 'fsi', coords: [-0.5022, 117.1536] },
  { id: 'kalbar-pontianak', name: 'Bank Kalbar HQ', location: 'Pontianak, Kalimantan Barat', island: 'Kalimantan', category: 'fsi', coords: [-0.0263, 109.3425] },
  { id: 'kalsel-banjarmasin', name: 'Bank Kalsel HQ', location: 'Banjarmasin, Kalimantan Selatan', island: 'Kalimantan', category: 'fsi', coords: [-3.3194, 114.5908] },

  // --- SULAWESI (5 PULAU BESAR) ---
  { id: 'sulsel-makassar', name: 'Bank Sulselbar HQ & Hub Maritim Makassar', location: 'Makassar, Sulawesi Selatan', island: 'Sulawesi', category: 'fsi', coords: [-5.1477, 119.4327] },
  { id: 'sulut-manado', name: 'Bank BSG (Bank SulutGo HQ)', location: 'Manado, Sulawesi Utara', island: 'Sulawesi', category: 'fsi', coords: [1.4748, 124.8421] },
  { id: 'sulteng-palu', name: 'Bank Sulteng & Kawasan Industri Morowali', location: 'Palu, Sulawesi Tengah', island: 'Sulawesi', category: 'fsi', coords: [-0.9003, 119.8779] },
  { id: 'sultra-kendari', name: 'Bank Sultra HQ', location: 'Kendari, Sulawesi Tenggara', island: 'Sulawesi', category: 'fsi', coords: [-3.9985, 122.5126] },

  // --- BALI & NUSA TENGGARA ---
  { id: 'bali-denpasar', name: 'Bank BPD Bali HQ & Tourism Payment Gateway', location: 'Denpasar, Bali', island: 'Bali-Nusa Tenggara', category: 'fsi', coords: [-8.6705, 115.2126] },
  { id: 'ntb-mataram', name: 'Bank NTB Syariah HQ & KEK Mandalika', location: 'Mataram, NTB', island: 'Bali-Nusa Tenggara', category: 'fsi', coords: [-8.5833, 116.1167] },
  { id: 'ntt-kupang', name: 'Bank NTT HQ', location: 'Kupang, NTT', island: 'Bali-Nusa Tenggara', category: 'fsi', coords: [-10.1772, 123.6070] },

  // --- MALUKU & PAPUA (5 PULAU BESAR) ---
  { id: 'maluku-ambon', name: 'Bank Maluku Malut HQ', location: 'Ambon, Maluku', island: 'Maluku', category: 'fsi', coords: [-3.6954, 128.1814] },
  { id: 'papua-jayapura', name: 'Bank Papua HQ & Kantor Gubernur Papua', location: 'Jayapura, Papua', island: 'Papua', category: 'fsi', coords: [-2.5337, 140.7181] },
  { id: 'papua-timika', name: 'PT Freeport Indonesia & Bank Papua Timika', location: 'Timika, Papua Tengah', island: 'Papua', category: 'oilgas', coords: [-4.5467, 136.8837] },
  { id: 'papua-sorong', name: 'KEK Sorong & Bank Papua Barat Daya', location: 'Sorong, Papua Barat Daya', island: 'Papua', category: 'fsi', coords: [-0.8761, 131.2558] }
];

export interface IndonesiaLeafletMapProps {
  language?: Language;
  className?: string;
}

export const IndonesiaLeafletMap: React.FC<IndonesiaLeafletMapProps> = ({
  className = ''
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return;

    // Center on Indonesia: [-2.2, 118.0]
    const map = L.map(mapContainerRef.current, {
      center: [-2.2, 118.0],
      zoom: 5,
      minZoom: 4,
      maxZoom: 16,
      zoomControl: false,
      attributionControl: false,
      boxZoom: false,
      doubleClickZoom: false,
      scrollWheelZoom: false,
      touchZoom: false,
      keyboard: false
    });

    // Esri World Light Gray Base: 100% Free, NO API KEY, Zero Labels/Text Clutter, Pure Clean Map Geometry
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
      {
        maxZoom: 16,
        subdomains: ['server', 'services']
      }
    ).addTo(map);

    // Initial bounding box to ensure whole Indonesia territory fits within container
    const indonesiaBounds = L.latLngBounds([5.8, 95.0], [-10.8, 141.0]);
    map.fitBounds(indonesiaBounds, {
      padding: [4, 4],
      maxZoom: 6
    });

    // Add Markers Layer Group
    const markersGroup = L.layerGroup().addTo(map);

    MAP_POINTS.forEach((pt) => {
      const isJakarta = pt.location.includes('Jakarta');

      // Monochromatic Corporate Palette: Blue & Slate
      const pinColor = isJakarta ? '#1a73e8' : '#2563eb';
      const size = isJakarta ? 13 : 9;
      const pulseHtml = isJakarta ? `
        <span class="absolute -inset-1 rounded-full animate-ping opacity-60" style="background-color: ${pinColor};"></span>
      ` : '';

      const iconHtml = `
        <div class="relative flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-125" style="width: ${size}px; height: ${size}px;">
          ${pulseHtml}
          <div class="relative w-full h-full rounded-full border-2 shadow-sm flex items-center justify-center" style="background-color: ${pinColor}; border-color: #ffffff; box-shadow: 0 0 5px rgba(26,115,232,0.4);">
            ${isJakarta ? '<div class="w-1 h-1 bg-white rounded-full"></div>' : ''}
          </div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'custom-div-pin',
        html: iconHtml,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2]
      });

      const marker = L.marker(pt.coords, { icon: customIcon });

      // Clean, native tooltip on hover (pure map experience, zero intrusive cards)
      marker.bindTooltip(
        `<div class="font-inter text-xs py-0.5 px-1">
            <strong class="text-slate-900 block font-bold text-[11px]">${pt.name}</strong>
            <span class="text-slate-500 text-[10px]">${pt.location}</span>
          </div>`,
        { direction: 'top', offset: [0, -size / 2], opacity: 0.95 }
      );

      marker.addTo(markersGroup);
    });

    mapInstanceRef.current = map;

    // Trigger invalidation and refit on resize
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
      map.fitBounds(indonesiaBounds, {
        padding: [8, 8],
        maxZoom: 6
      });
    });
    resizeObserver.observe(mapContainerRef.current);

    return () => {
      resizeObserver.disconnect();
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className={`relative w-full aspect-video rounded-xl overflow-hidden border border-slate-200/90 bg-[#f4f3f0] shadow-2xs select-none [&_.leaflet-control]:!hidden [&_.leaflet-control-container]:!hidden [&_.leaflet-bar]:!hidden ${className}`}>
      {/* Pure Maps Canvas: 100% Surface Without Any Header, Tabs, Buttons, Zoom Controls, or Full View Controls */}
      <div ref={mapContainerRef} className="absolute inset-0 w-full h-full z-0" />
    </div>
  );
};

export default IndonesiaLeafletMap;
