import React, { useState } from 'react';
import { DeathPenaltyDefendant, ShipmentData } from '../types';

const SHIPMENTS: ShipmentData[] = [
  {
    id: 1,
    date: '',
    label: '01/2026 - 03/2026',
    weight: '6 chuyến hàng',
    detail: 'Trót lọt',
    heightPercent: 10,
  },
  {
    id: 2,
    date: '8/3/2023',
    label: '8/3/2023',
    weight: '1,96kg',
    detail: '5.023 viên',
    heightPercent: 18,
  },
  {
    id: 3,
    date: '10/3/2023',
    label: '10/3/2023',
    weight: '1,83kg',
    detail: '4.000 viên',
    heightPercent: 16,
  },
  {
    id: 4,
    date: '12/3/2023',
    label: '12/3/2023',
    weight: '2,66kg',
    detail: '5.804 viên',
    heightPercent: 25,
  },
  {
    id: 5,
    date: '16/3/2023',
    label: '16/3/2023 (Bị phát hiện)',
    weight: '>11kg',
    detail: '327 tuýp, 157 chứa ma túy',
    heightPercent: 90,
    isFlagged: true,
  },
];

const DEFENDANTS_11: DeathPenaltyDefendant[] = [
  {
    id: 1,
    name: 'Hà Danh Nậm',
    branch: 'Chủ mưu chung, nguồn châu Âu',
    volume: '~18kg (mua bán)',
  },
  {
    id: 2,
    name: 'Nguyễn Huy Hoàng',
    branch: 'Telegram "Tèo" (nguồn Nậm)',
    volume: '~40kg MDMA + 5kg ketamine',
  },
  {
    id: 3,
    name: 'Lê Thắng Anh Tú',
    branch: 'Telegram "Tèo" (nguồn Nậm + Campuchia)',
    volume: '>35kg MDMA, >14kg ketamine, >11kg khác',
  },
  {
    id: 4,
    name: 'Văn Hoàng Minh',
    branch: 'Telegram "Tèo" (nguồn Nậm)',
    volume: '>6kg ma túy các loại',
  },
  {
    id: 5,
    name: 'Lê Nguyễn Gia Bảo',
    branch: 'Nhóm Telegram/Signal độc lập',
    volume: '>11,2kg ketamine, >5,1kg thuốc lắc, >17kg khác',
  },
  {
    id: 6,
    name: 'Trần Kiến An',
    branch: 'Nhóm Telegram/Signal độc lập',
    volume: '(gộp cùng Bảo)',
  },
  {
    id: 7,
    name: 'Trịnh Bảo Quân',
    branch: 'Nguồn cung cho nhóm Bảo–An',
    volume: '5kg (bán cho Bảo và An)',
  },
  {
    id: 8,
    name: 'Nguyễn Xuân Hiếu',
    branch: 'Nguồn cung ketamine riêng',
    volume: '6,8kg ketamine',
  },
  {
    id: 9,
    name: 'Phạm Anh Khoa',
    branch: 'Nguồn Campuchia',
    volume: '>7kg ma túy tổng hợp',
  },
  {
    id: 10,
    name: 'Phạm Đức Duy',
    branch: 'Vụ án độc lập thứ tư',
    volume: '>5kg (thu giữ khi bắt quả tang)',
  },
  {
    id: 11,
    name: 'Nguyễn Thanh Nhân',
    branch: 'Sai lệch mức án đề nghị',
    volume: 'Khối lượng cụ thể chưa được báo công khai chi tiết',
  },
];

export const Chapter3TacticalMap: React.FC = () => {
  const [stage, setStage] = useState<number>(1);
  const [hoveredShipment, setHoveredShipment] = useState<number | null>(null);

  const stageCaptions: Record<number, string> = {
    1: 'Trạng thái 1: Khởi điểm - Nguồn cung từ Pháp và điểm đến Việt Nam (Hà Danh Nậm chỉ đạo từ xa).',
    2: 'Trạng thái 2: Tuyến quốc tế - Xách tay qua Tân Sơn Nhất và Bưu kiện qua Nội Bài.',
    3: 'Trạng thái 3: Tuyến nội địa - Hai tuyến cùng hội tụ về đầu mối Tổng kho Đồng Nai (Hoàng Sỹ Thắng).',
    4: 'Trạng thái 4: Phân phối bán lẻ - Tỏa từ Đồng Nai sang Bình Dương và TP.HCM qua Bùi Văn Ánh.',
  };

  return (
    <section id="chuong-3" className="w-full py-20 bg-[#F9F7F1] border-b border-[#E0DDD5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-[#7a1f1f] bg-red-100 px-2 py-0.5 uppercase tracking-wider font-semibold">
            MỤC LỤC: 03/07
          </span>
          <span className="font-mono text-xs text-[#1F2A44] font-semibold">
            SƠ ĐỒ TỔNG HỢP &amp; DÒNG CHẢY HÀNG CẤM
          </span>
        </div>
        <h2 className="font-headline-lg text-4xl md:text-5xl font-bold tracking-tight mb-4 text-[#1B1B1F]">
          Chương 3: Lộ diện đường dây tội phạm xuyên quốc gia
        </h2>
        <p className="font-body-lead text-[1.25rem] text-[#1F2A44] max-w-3xl mb-10">
          Từ một kiện hàng vô chủ, Cục C04 Bộ Công an phối hợp Công an TP.HCM đã lột trần cấu trúc 3 nhánh phân phối độc lập, truy quét 11 trùm đầu mối và bóc gỡ hệ thống rửa tiền quốc tế hàng trăm tỷ đồng.
        </p>

        {/* MẬT LỆNH ĐÊM 15/3 */}
        <div className="bg-white p-6 border-l-4 border-[#7a1f1f] border border-[#1B1B1F] mb-12">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#E0DDD5] font-mono text-xs">
            <span className="text-[#7a1f1f] font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-red-700 inline-block" /> TƯ LIỆU ĐIỀU TRA GIẢI MẬT: 6 CHUYẾN HÀNG TRÓT LỌT
            </span>
            <span className="text-gray-500">MẬT LỆNH ĐÊM 15/03/2023 TRƯỚC GIỜ PHÁ ÁN</span>
          </div>
          <div className="font-body-regular text-[#4a5568] text-sm leading-relaxed space-y-3">
            <p className="text-[1.25rem]">
              Theo kết luận điều tra, trước khi bị chặn bắt tại sân bay Tân Sơn Nhất, đường dây của Hà Danh Nậm đã thực hiện trót lọt ít nhất <strong>6 chuyến vận chuyển ma túy</strong> từ Pháp về Việt Nam theo cùng phương thức xách tay và chuyển phát nhanh bưu kiện quốc tế mà không bị phát hiện.
            </p>
            <p className="text-[1.25rem] italic text-[#1B1B1F] bg-[#F9F7F1] p-4 border border-[#E0DDD5]">
              "Vào đêm 15/3/2023, chỉ vài giờ trước khi chuyến bay mang số hiệu VN10 cất cánh từ sân bay Charles de Gaulle (Paris), đối tượng môi giới trung gian đã gấp rút đóng gói 157 tuýp kem đánh răng chứa hơn 11kg ma túy vào các kiện hàng tạp hóa rồi chia đều gửi cho 4 nữ tiếp viên nhận mang hộ về TP.HCM với giá cước thỏa thuận 6,5 Euro/kg. Toàn bộ kiện hàng lập tức rơi vào diện giám sát đặc biệt khi máy bay hạ cánh."
            </p>
          </div>
        </div>

        {/* BẢN ĐỒ CHIẾN THUẬT VỚI ẢNH TƯ LIỆU VÀ SVG FLOW */}
        <div className="relative w-full mb-16 bg-[#F9F7F1] border border-[#1B1B1F]" id="scrolly-map-system">
          {/* Header bar with Title & Hà Danh Nậm tactical dossier */}
          <div className="p-3 bg-[#F9F7F1] border-b border-[#1B1B1F] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#7a1f1f] inline-block" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#1B1B1F] font-bold">
                BẢN ĐỒ CHIẾN THUẬT TRINH SÁT // 4 GIAI ĐOẠN ĐIỀU TRA
              </span>
            </div>
            <div className="group relative cursor-pointer">
              <div className="border border-[#1B1B1F] bg-white px-3 py-1 text-right">
                <span className="font-mono text-[10px] text-[#7a1f1f] block uppercase font-bold">
                  CHỈ ĐẠO TOÀN DIỆN TỪ XA
                </span>
                <span className="font-title-editorial text-xs md:text-sm font-bold text-[#1B1B1F] tracking-wider">
                  HÀ DANH NẬM [TRUY NÃ]
                </span>
              </div>
              <div className="absolute right-0 top-full mt-1 hidden group-hover:block z-50 w-80 p-3 bg-[#1F2A44] border border-white text-white text-xs leading-relaxed pointer-events-none">
                Chỉ đạo toàn bộ từ xa qua các ứng dụng nhắn tin bảo mật cao, không trực tiếp xuất hiện ở bất kỳ khâu nào của quá trình vận chuyển.
              </div>
            </div>
          </div>

          {/* 4 Buttons Bar for direct stage selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-[#1B1B1F] bg-[#ECE8DF] text-xs font-mono">
            {[
              { id: 1, name: '1. KHỞI ĐIỂM' },
              { id: 2, name: '2. ĐƯỜNG QUỐC TẾ' },
              { id: 3, name: '3. ĐƯỜNG NỘI ĐỊA' },
              { id: 4, name: '4. PHÂN PHỐI BÁN LẺ' },
            ].map((btn) => {
              const active = btn.id === stage;
              return (
                <button
                  key={btn.id}
                  type="button"
                  onClick={() => setStage(btn.id)}
                  className={`py-2.5 px-3 border-r border-[#1B1B1F] text-left font-bold transition-colors cursor-pointer ${
                    active ? 'bg-[#1F2A44] text-white' : 'bg-white text-[#1B1B1F] hover:bg-[#ECE8DF]'
                  }`}
                >
                  {btn.name}
                </button>
              );
            })}
          </div>

          {/* Split Map Left / Narrative Steps Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start relative">
            {/* Map Canvas */}
            <div className="lg:col-span-8 lg:sticky lg:top-20 z-20 border-b lg:border-b-0 lg:border-r border-[#1B1B1F] bg-[#F9F7F1]">
              <div className="relative w-full h-[480px] md:h-[550px] bg-[#F9F7F1] light-grid-canvas overflow-hidden">
                {/* STAGE 1: Khởi điểm */}
                {stage === 1 && (
                  <div className="absolute inset-0 block">
                    {/* Pháp bên trái */}
                    <div className="group absolute left-6 md:left-10 top-10 w-48 md:w-56 cursor-pointer z-20">
                      <div className="text-xs font-mono font-bold text-[#7a1f1f] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px] text-[#1B1B1F]">flight_takeoff</span>
                        NGUỒN CUNG: PHÁP
                      </div>
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZrocJC7MTmNeoEnNMFMpbJbPsNujVcbliBSvCMVlC4NUA4nSFcQFvAqKLnmtKOm301EY5mjAzU-knmT-5fdmymPBJeVHIPSCGilQyDsrWCHVF_3nMyLuXI1vwkyc-QZmOT9nUoa77W72tW_KuNPkU0IRPLPUI2v6cnu0M0_7bKltD2b-QHZK3KVvE2VCtLLtKQMKGZhhoBxdh0mV2J9O9CyFz7icc5B3RXBHaAzWbPiOYMhw7vrD2ZlRQ14lhPG_0h_I"
                        alt="Bản đồ Pháp"
                        className="w-full h-auto object-contain select-none"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                      <div className="absolute left-0 top-full mt-1 hidden group-hover:block z-50 w-72 p-3 bg-[#1F2A44] border border-white text-white text-xs leading-relaxed pointer-events-none">
                        Từ Pháp, ma túy bắt đầu hành trình về Việt Nam theo hai con đường song song.
                      </div>
                    </div>

                    {/* 2 máy bay chờ ở Pháp */}
                    <div className="absolute left-[210px] md:left-[270px] top-[150px] flex flex-col gap-3 z-20">
                      <div className="flex items-center gap-1.5 bg-white border border-[#1B1B1F] px-2 py-0.5 text-[10px] font-mono font-bold text-[#1B1B1F]">
                        <span className="material-symbols-outlined text-[14px] text-[#7a1f1f]">flight</span> CHUYẾN 1 (XÁCH TAY)
                      </div>
                      <div className="flex items-center gap-1.5 bg-white border border-[#1B1B1F] px-2 py-0.5 text-[10px] font-mono font-bold text-[#1B1B1F]">
                        <span className="material-symbols-outlined text-[14px] text-[#1F2A44]">flight</span> CHUYẾN 2 (BƯU KIỆN)
                      </div>
                    </div>

                    {/* Khoảng cách giữa */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-10">
                      <span className="material-symbols-outlined text-3xl text-gray-500">arrow_right_alt</span>
                      <span className="font-mono text-[10px] text-gray-600 bg-white border border-[#1B1B1F] px-2 py-0.5 uppercase tracking-wider">
                         Sân bay CDG (Paris) ➔ VIỆT NAM
                      </span>
                      <span className="font-mono text-[9px] text-gray-500">Khoảng cách: ~10.000 km</span>
                    </div>

                    {/* Việt Nam bên phải */}
                    <div className="absolute right-4 md:right-8 top-4 w-52 md:w-64 h-[470px] flex flex-col items-center z-20">
                      <div className="text-xs font-mono font-bold text-[#1F2A44] uppercase tracking-wider mb-1">
                        ĐIỂM ĐẾN: VIỆT NAM
                      </div>
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBClZGfv9BWjfViWerjbN1x49wAjToMqSkNxG7TWC57ZrnChOXPe1i0Co0e4B9ivCpCsSnl5ZR-CxkykcpN7st0nWA7-PTnu27ENtvbm6l_c4m6XMnYc9q_9TeM5hKGPNrDLOFqS3qklNH0NyuxrTj7EU2ZrLPT-LcX_zb_N7losrXi7Co-H46WVCgDBxPMZ8xMVlbyWFAMQNUFFdwbVMONHfZg7wXUH-siJevuDbSjozBb23n3o_0WhpJx7uIMkRtNGio"
                        alt="Bản đồ Việt Nam"
                        className="w-full h-full object-contain select-none"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>
                  </div>
                )}

                {/* STAGE 2: Tuyến quốc tế */}
                {stage === 2 && (
                  <div className="absolute inset-0 block">
                    <div className="absolute left-6 md:left-10 top-10 w-44 md:w-52 z-10">
                      <div className="text-xs font-mono font-bold text-[#7a1f1f] uppercase tracking-wider mb-2">
                        PHÁP (PARIS - CDG)
                      </div>
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlIolYud7BGBRdyjStii5lsnAePEWoHZf9UhOHd4v7tqZcWQ5uBK1tga0-22pk6GibcZ-EJ_pGYhBpFcn8Tq4Tn95X5rdQ7rw9LdX-QagES8QVhcQiSA7Ml5TVdKb3zetovrihGBm9ID35EWBrOr-cZZ1s2F94dIlAwhBcpblVvxvr1N4UCJhIQvKY1J0Rc5xLdFjHJust-sTXRAy53-N0Oj-FSqZR_fH8nLn-iIowFKHqAQ-MV-GXJ2BqD4hBbhVi9YI"
                        alt="Bản đồ Pháp"
                        className="w-full h-auto object-contain select-none"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>

                    {/* SVG Flight Lines */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 700 500">
                      <defs>
                        <marker id="arrow-blk-qte" markerHeight="6" markerWidth="6" orient="auto" refX="6" refY="3">
                          <path d="M 0 0 L 6 3 L 0 6 Z" fill="#1B1B1F" />
                        </marker>
                      </defs>
                      <path
                        d="M 180 180 C 320 80, 430 110, 520 150"
                        fill="none"
                        stroke="#1B1B1F"
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                        markerEnd="url(#arrow-blk-qte)"
                      />
                      <path
                        d="M 180 200 C 330 360, 420 390, 510 375"
                        fill="none"
                        stroke="#7A1F1F"
                        strokeWidth="2.5"
                        markerEnd="url(#arrow-blk-qte)"
                      />
                    </svg>

                    <div className="absolute left-[330px] top-[110px] z-30 bg-white border border-[#1B1B1F] p-1 flex items-center gap-1 font-mono text-[9px]">
                      <span className="material-symbols-outlined text-[14px] text-[#1B1B1F]">flight</span> Bưu kiện (Nội Bài)
                    </div>
                    <div className="absolute left-[340px] top-[340px] z-30 bg-white border border-[#7A1F1F] p-1 flex items-center gap-1 font-mono text-[9px] text-[#7A1F1F] font-bold">
                      <span className="material-symbols-outlined text-[14px] text-[#7A1F1F]">flight</span> VN10 (Tân Sơn Nhất)
                    </div>

                    <div className="absolute right-4 md:right-8 top-4 w-52 md:w-64 h-[470px] flex flex-col items-center z-10">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRlZ5cW2SaCm0jGdtnf3hJ1P5aepDtLrgIQebjeo90DZXiGsXYcH0KP5hSaWuHx0EwpZHTweTAJK6uOb7eCM63wFBX_qukjhz4XKHOT7OdGlQf_FeCY7n12cP9Eh5ltIiOd8L1jx2A6oHlVSvYkmNAhaJ3CC96l9Tb5uxGloLUIX3DVlwhIS8dmGvmOPqX-vHohwr8lq-bnKaS_PQKAOrYtDvykBq3IUhWnAToDVEn5KHBqGQROHuk1_XsUunKJAw5Vmg"
                        alt="Bản đồ Việt Nam"
                        className="w-full h-full object-contain select-none"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>

                    {/* Điểm đến Nội Bài */}
                    <div className="group absolute right-[120px] md:right-[150px] top-[140px] cursor-pointer z-30">
                      <div className="flex items-center gap-1 bg-[#1B1B1F] text-white px-2 py-0.5 text-[10px] font-mono font-bold border border-white">
                        <span className="w-2 h-2 bg-red-500 inline-block" /> NỘI BÀI (HÀ NỘI)
                      </div>
                      <div className="absolute right-0 top-full mt-1 hidden group-hover:block z-50 w-72 p-3 bg-[#1F2A44] border border-white text-white text-xs leading-relaxed pointer-events-none">
                        Đường thứ hai là chuyển phát nhanh quốc tế. Hàng đi dưới dạng bưu kiện thông thường, nhập cảnh qua sân bay Nội Bài rồi tỏa xuống các tỉnh phía Nam.
                      </div>
                    </div>

                    {/* Điểm đến Tân Sơn Nhất */}
                    <div className="group absolute right-[130px] md:right-[160px] bottom-[120px] cursor-pointer z-30">
                      <div className="flex items-center gap-1 bg-[#7a1f1f] text-white px-2 py-0.5 text-[10px] font-mono font-bold border border-white">
                        <span className="w-2 h-2 bg-white inline-block" /> TÂN SƠN NHẤT (TP.HCM)
                      </div>
                      <div className="absolute right-0 bottom-full mb-1 hidden group-hover:block z-50 w-72 p-3 bg-[#1F2A44] border border-white text-white text-xs leading-relaxed pointer-events-none">
                        Đường thứ nhất là xách tay. Các tiếp viên hàng không và một số người Việt tại Pháp mang ma túy trong hành lý cá nhân, nhập cảnh qua Tân Sơn Nhất.
                      </div>
                    </div>
                  </div>
                )}

                {/* STAGE 3: Tuyến nội địa (Zoom 1.8x VN) */}
                {stage === 3 && (
                  <div className="absolute inset-0 block">
                    <div className="absolute left-4 top-4 opacity-20 pointer-events-none w-28">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1newjN5H2iYYARNv4aK5dvIYe2ZKEO8TyYSz5hD1iX9j2pkSVeWO2f8UuKvwub0ef4fpKvtmGzCuu0SdDYcUEZEMr56P-Rd0F3zrzCECMcqN86itudcL-PLo3J-z_iceK_V-VPsTMjGpN7T40IMGyy4-bIv0HDSEfk8LzH_7If8dEwEOKHKIR7dNi92KupUVs_NFayL5en8AMbSRtasSMtJom179fmNIQHsy5VCB1fcxoofq7D4fegfx6tTI4zTHuG9I"
                        alt="Pháp mờ"
                        className="w-full h-auto select-none"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div className="relative w-[480px] h-[480px] flex items-center justify-center">
                        <img
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMC6K-AEXSUA-3F6FgOeeBkH1REC3fqEVUSXZ60vugXPpg_CoARqKHGDsfZ4fZwnlNFj6bDke6cqxcifRkaen_P8rrjNTDLCGcrbiNVjCv_oIERLh7JyKckKFf90y-Jr0ElJSFND0Uj-UVQbznEjE1eVpqjZhBe_HDd1MsqGjjCVwOy51i1TW2afqUVnPYsOscYBAP8fAGfv6SIAChTcRzz9o-YhewXvF8frRgI6Eef-EcQOfq9Ei1CtkveoDGdW7e3YE"
                          alt="Bản đồ Việt Nam Zoom 1.8x"
                          className="w-full h-full object-contain select-none"
                          style={{
                            mixBlendMode: 'multiply',
                            transform: 'scale(1.8) translateY(20px)',
                          }}
                        />

                        {/* Direct lines into Dong Nai */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 480 480">
                          <defs>
                            <marker id="arrow-blk-in" markerHeight="5" markerWidth="5" orient="auto" refX="5" refY="2.5">
                              <path d="M 0 0 L 5 2.5 L 0 5 Z" fill="#1B1B1F" />
                            </marker>
                          </defs>
                          <line x1="235" y1="100" x2="245" y2="345" stroke="#1B1B1F" strokeWidth="2.5" strokeDasharray="5 3" markerEnd="url(#arrow-blk-in)" />
                          <line x1="200" y1="375" x2="235" y2="355" stroke="#1B1B1F" strokeWidth="2.5" markerEnd="url(#arrow-blk-in)" />
                        </svg>

                        <div className="absolute left-[215px] top-[75px] font-mono text-[9px] bg-[#ECE8DF] border border-[#1B1B1F] px-1.5 py-0.5 font-bold z-20">
                          HÀ NỘI (NỘI BÀI)
                        </div>
                        <div className="absolute left-[130px] top-[375px] font-mono text-[9px] bg-[#ECE8DF] border border-[#1B1B1F] px-1.5 py-0.5 font-bold z-20">
                          TP. HỒ CHÍ MINH
                        </div>

                        {/* Đồng Nai Tổng kho */}
                        <div className="group absolute left-[240px] top-[335px] cursor-pointer z-30">
                          <div className="flex items-center gap-1.5 bg-[#7a1f1f] text-white px-2 py-1 text-xs font-mono font-bold border border-white">
                            <span className="w-2 h-2 bg-amber-400 inline-block animate-ping" /> ĐỒNG NAI (TỔNG KHO)
                          </div>
                          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 hidden group-hover:block z-50 w-80 p-3 bg-[#1F2A44] border border-white text-white text-xs leading-relaxed pointer-events-none text-left">
                            Dù đi đường nào, tất cả các kiện hàng đều hội tụ về một điểm duy nhất: Đồng Nai. Hoàng Sỹ Thắng được Nậm thuê làm đầu mối tại Đồng Nai, trực tiếp nhận hàng, mở kiện và phân chia lại từng phần nhỏ theo đúng chỉ định Nậm gửi qua tin nhắn. Thắng hưởng lợi 96 triệu đồng từ vai trò trung chuyển này.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STAGE 4: Phân phối bán lẻ (Zoom 2.8x Nam Bộ) */}
                {stage === 4 && (
                  <div className="absolute inset-0 block">
                    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                      <div className="relative w-[520px] h-[480px] flex items-center justify-center">
                        <div className="absolute inset-0 overflow-hidden">
                          <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyc0OpAlSULuX3m8aUaYqjRJwbBAFc_uvjWww8YGpj9O-nEpAzwU95XAFxdktbWaRdJrReRRAC3VDqUS_cksH8YLRZ_mEbLL02uYrbgeLJz4RHPKBapAL95CVY012P6itfQPriR--vd1ZMtk8bLH6BY6ZJDgSO_A5IV40LguitYGcUirf0PEcjjJgVmgCB5GVIr9QPj-6vmT5m5EePzzVqwDLg30SlVNwYuEdImThLKd-Zru9lXmf01H1b0T_BDkAHzLE"
                            alt="Bản đồ Nam Bộ Zoom 2.8x"
                            className="w-full h-full object-contain select-none"
                            style={{
                              mixBlendMode: 'multiply',
                              transform: 'scale(2.8) translate(-25px, -155px)',
                            }}
                          />
                        </div>

                        {/* Mũi tên tỏa từ Đồng Nai */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" viewBox="0 0 520 480">
                          <defs>
                            <marker id="arrow-blk-ret" markerHeight="5" markerWidth="5" orient="auto" refX="5" refY="2.5">
                              <path d="M 0 0 L 5 2.5 L 0 5 Z" fill="#1B1B1F" />
                            </marker>
                          </defs>
                          <line x1="280" y1="230" x2="180" y2="195" stroke="#1B1B1F" strokeWidth="2.5" markerEnd="url(#arrow-blk-ret)" />
                          <line x1="280" y1="250" x2="170" y2="305" stroke="#1B1B1F" strokeWidth="2.5" markerEnd="url(#arrow-blk-ret)" />
                        </svg>

                        {/* Đồng Nai Tổng kho */}
                        <div className="absolute left-[275px] top-[220px] z-20">
                          <div className="bg-[#7a1f1f] text-white px-2.5 py-1 text-xs font-mono font-bold border border-white">
                            ĐỒNG NAI (TỔNG KHO)
                          </div>
                        </div>

                        {/* Bình Dương */}
                        <div className="group absolute left-[70px] top-[175px] cursor-pointer z-30">
                          <div className="bg-[#1F2A44] text-white px-2 py-1 text-xs font-mono font-bold border border-white flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-amber-400 inline-block" /> BÌNH DƯƠNG
                          </div>
                          <div className="absolute left-0 top-full mt-1 hidden group-hover:block z-50 w-80 p-3 bg-[#1F2A44] border border-white text-white text-xs leading-relaxed pointer-events-none text-left">
                            Đầu mối tiêu thụ, được Bùi Văn Ánh, cháu rể của Thắng và được hắn thuê với số tiền từ 500.000 tới 4.000.000 đồng mỗi chuyến.
                          </div>
                        </div>

                        {/* TP.HCM */}
                        <div className="group absolute left-[60px] top-[295px] cursor-pointer z-30">
                          <div className="bg-[#1F2A44] text-white px-2 py-1 text-xs font-mono font-bold border border-white flex items-center gap-1.5">
                            <span className="w-2 h-2 bg-amber-400 inline-block" /> TP. HỒ CHÍ MINH (TIÊU THỤ)
                          </div>
                          <div className="absolute left-0 bottom-full mb-1 hidden group-hover:block z-50 w-80 p-3 bg-[#1F2A44] border border-white text-white text-xs leading-relaxed pointer-events-none text-left">
                            Đầu mối tiêu thụ lớn nhất, cung cấp sỉ và lẻ cho hàng trăm đối tượng và các tụ điểm vui chơi giải trí.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Status Caption of Map */}
              <div className="p-3 bg-[#F9F7F1] border-t border-[#1B1B1F] flex flex-wrap items-center justify-between text-xs font-mono text-gray-700">
                <span className="font-medium">{stageCaptions[stage]}</span>
                <span className="text-[#7a1f1f] font-bold">CẬP NHẬT THEO HỒ SƠ TỐ TỤNG C04</span>
              </div>
            </div>

            {/* Scrollable Scrollytelling Narrative Steps Right */}
            <div className="lg:col-span-4 p-4 md:p-6 space-y-6 bg-white">
              {/* Step 1 Card */}
              <div
                onClick={() => setStage(1)}
                className={`p-5 border transition-all cursor-pointer ${
                  stage === 1 ? 'border-[#1B1B1F] bg-[#F9F7F1]' : 'border-[#E0DDD5] bg-white hover:border-[#7a1f1f]'
                }`}
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#D5D0C5] text-xs font-mono">
                  <span className="font-bold text-[#7a1f1f] uppercase">BƯỚC 01 // KHỞI ĐIỂM</span>
                  <span className="text-gray-500">NGUỒN CUNG PHÁP</span>
                </div>
                <h4 className="font-title-editorial text-lg font-bold text-[#1B1B1F] mb-2">
                  Xuất phát điểm xuyên lục địa
                </h4>
                <p className="font-body-regular text-[1.25rem] text-[#1F2A44] leading-relaxed mb-3">
                  Từ Paris (Pháp), nguồn ma túy được tập kết và đóng gói tinh vi. Kẻ cầm đầu <strong>Hà Danh Nậm</strong> chỉ đạo toàn bộ mạng lưới từ xa qua phần mềm mã hóa, điều động 2 con đường hàng không song song về Việt Nam.
                </p>
                <span className="inline-block font-mono text-[10px] text-[#7a1f1f] font-semibold uppercase">
                  [Nhấp để chọn Trạng thái 1]
                </span>
              </div>

              {/* Step 2 Card */}
              <div
                onClick={() => setStage(2)}
                className={`p-5 border transition-all cursor-pointer ${
                  stage === 2 ? 'border-[#1B1B1F] bg-[#F9F7F1]' : 'border-[#E0DDD5] bg-white hover:border-[#7a1f1f]'
                }`}
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E0DDD5] text-xs font-mono">
                  <span className="font-bold text-[#1F2A44] uppercase">BƯỚC 02 // TUYẾN QUỐC TẾ</span>
                  <span className="text-gray-500">2 LUỒNG VẬN CHUYỂN</span>
                </div>
                <h4 className="font-title-editorial text-lg font-bold text-[#1B1B1F] mb-2">
                  Hàng không Tân Sơn Nhất &amp; Bưu kiện Nội Bài
                </h4>
                <p className="font-body-regular text-[1.25rem] text-[#1F2A44] leading-relaxed mb-3">
                  Tuyến 1 xách tay qua tiếp viên đáp xuống Tân Sơn Nhất (157 tuýp kem ma túy). Tuyến 2 chuyển phát nhanh bưu kiện quốc tế qua Nội Bài rồi trung chuyển hỏa tốc vào phía Nam.
                </p>
                <span className="inline-block font-mono text-[10px] text-[#1F2A44] font-semibold uppercase">
                  [Nhấp để chọn Trạng thái 2]
                </span>
              </div>

              {/* Step 3 Card */}
              <div
                onClick={() => setStage(3)}
                className={`p-5 border transition-all cursor-pointer ${
                  stage === 3 ? 'border-[#1B1B1F] bg-[#F9F7F1]' : 'border-[#E0DDD5] bg-white hover:border-[#7a1f1f]'
                }`}
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E0DDD5] text-xs font-mono">
                  <span className="font-bold text-amber-800 uppercase">BƯỚC 03 // TUYẾN NỘI ĐỊA</span>
                  <span className="text-gray-500">TỔNG KHO ĐỒNG NAI</span>
                </div>
                <h4 className="font-title-editorial text-lg font-bold text-[#1B1B1F] mb-2">
                  Hội tụ về kho trung chuyển Hoàng Sỹ Thắng
                </h4>
                <p className="font-body-regular text-[1.25rem] text-[#1F2A44] leading-relaxed mb-3">
                  Mọi kiện hàng từ hai miền hội tụ về Đồng Nai. Hoàng Sỹ Thắng tiếp nhận, tháo dỡ và xé lẻ thành các gói nhỏ theo đúng lệnh của Nậm, hưởng thù lao 96 triệu đồng.
                </p>
                <span className="inline-block font-mono text-[10px] text-amber-800 font-semibold uppercase">
                  [Nhấp để chọn Trạng thái 3]
                </span>
              </div>

              {/* Step 4 Card */}
              <div
                onClick={() => setStage(4)}
                className={`p-5 border transition-all cursor-pointer ${
                  stage === 4 ? 'border-[#1B1B1F] bg-[#F9F7F1]' : 'border-[#E0DDD5] bg-white hover:border-[#7a1f1f]'
                }`}
              >
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E0DDD5] text-xs font-mono">
                  <span className="font-bold text-red-700 uppercase">BƯỚC 04 // PHÂN PHỐI BÁN LẺ</span>
                  <span className="text-gray-500">BÙI VĂN ÁNH</span>
                </div>
                <h4 className="font-title-editorial text-lg font-bold text-[#1B1B1F] mb-2">
                  Tỏa nguồn hàng về Bình Dương &amp; TP.HCM
                </h4>
                <p className="font-body-regular text-[1.25rem] text-[#1F2A44] leading-relaxed mb-3">
                  Từ Đồng Nai, Bùi Văn Ánh chuyển hàng đến tay các trùm buôn sỉ và tụ điểm ăn chơi khắp Bình Dương, TP.HCM với cước từ 500.000 đến 4.000.000 VNĐ mỗi chuyến.
                </p>
                <span className="inline-block font-mono text-[10px] text-red-700 font-semibold uppercase">
                  [Nhấp để chọn Trạng thái 4]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* BIỂU ĐỒ CỘT THỐNG KÊ MA TÚY THEO CHUYẾN */}
        <div className="w-full mb-16 bg-white border border-[#1B1B1F] p-6">
          <div className="flex flex-wrap items-center justify-between pb-3 mb-4 border-b border-[#E0DDD5]">
            <div className="flex items-center gap-2 font-mono text-xs text-[#7a1f1f] font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-[#7a1f1f] inline-block" /> BIỂU ĐỒ TRINH SÁT: KHỐI LƯỢNG MA TÚY THEO TỪNG CHUYẾN VẬN CHUYỂN
            </div>
            <div className="font-mono text-[11px] text-gray-500">
              NGUỒN: KẾT LUẬN ĐIỀU TRA C04 - BỘ CÔNG AN
            </div>
          </div>
          <div className="text-xs text-[#1B1B1F] font-body-regular mb-4">
            Chiều cao cột ~ khối lượng ma túy mỗi chuyến (kg) - Di chuột để xem chi tiết
          </div>

          <div className="bg-[#F9F7F1] p-6 border border-[#E0DDD5]">
            <div className="h-[360px] flex items-end justify-between gap-3 sm:gap-6 border-b border-[#1B1B1F] pb-0 pt-6 px-2 sm:px-6 relative">
              {SHIPMENTS.map((s) => {
                const isHovered = hoveredShipment === s.id;
                return (
                  <div
                    key={s.id}
                    className="flex-1 h-full flex items-end justify-center"
                    onMouseEnter={() => setHoveredShipment(s.id)}
                    onMouseLeave={() => setHoveredShipment(null)}
                  >
                    <div
                      className={`w-full max-w-[110px] border border-[#7A1F1F] cursor-pointer flex flex-col items-center justify-center p-1 text-center transition-all duration-200 ${
                        isHovered ? 'bg-[#7a1f1f]/20 border-[#7A1F1F] scale-102' : 'bg-transparent hover:bg-[#7a1f1f]/5'
                      }`}
                      style={{ height: `${s.heightPercent}%` }}
                    >
                      <span
                        className={`font-mono text-[10px] sm:text-[11px] leading-tight text-[#7a1f1f] font-bold transition-opacity duration-200 ${
                          isHovered ? 'opacity-100' : 'opacity-80 sm:opacity-0 hover:opacity-100'
                        }`}
                      >
                        {s.weight}
                        <br />
                        <span className="text-[9px] font-normal">{s.detail}</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between gap-3 sm:gap-6 pt-3 px-2 sm:px-6 text-center font-mono text-[10px] sm:text-xs text-gray-700">
              {SHIPMENTS.map((s) => (
                <div key={s.id} className="flex-1 flex justify-center">
                  <span className={`max-w-[120px] leading-tight ${s.isFlagged ? 'font-bold text-[#7a1f1f]' : ''}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* KHỐI VĂN BẢN HAI CỘT TELEGRAM */}
        <div className="w-full mb-12 bg-[#F9F7F1]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cột 1 */}
            <div className="p-6 bg-[#F9F7F1] border border-[#1B1B1F]">
              <h3 className="font-title-editorial text-[#7A1F1F] text-2xl font-bold uppercase tracking-wider pb-3 mb-4 ">
                Nhánh bán buôn qua Telegram “Tèo”
              </h3>
              <div className="space-y-4 font-body-regular text-[#1B1B1F] text-justify leading-relaxed">
                <p className="text-[1.25rem]">
                  Song song với việc tự tổ chức vận chuyển, Nậm còn dùng chính tài khoản Telegram <strong>Tèo</strong> để bán buôn ma túy, cũng lấy nguồn từ châu Âu, cho các đầu mối hoàn toàn độc lập với Thắng và Ánh. Lớn nhất trong số này là <strong>Nguyễn Huy Hoàng</strong>, sinh năm 1997. Từ ngày 23/2 đến 16/3/2023, Hoàng đặt mua 7 lô hàng từ <strong>Tèo</strong>, tổng cộng 118.600 viên MDMA, tương đương khoảng 39,8kg, rồi bán lại cho <strong>Lê Thắng Anh Tú</strong>, <strong>Văn Hoàng Minh</strong> và nhiều đầu mối khác. Ngoài nguồn từ Nậm, Hoàng còn mua riêng khoảng 5kg ketamine của <strong>Nguyễn Xuân Hiếu</strong>. Hiếu, người cũng cung cấp ketamine cho một số đầu mối khác trong đại án, bị HĐXX xác định chịu trách nhiệm hình sự tổng cộng 6,8kg ketamine và cũng nhận án <strong>tử hình</strong> dù đang bỏ trốn, bị xét xử vắng mặt.
                </p>
                <p className="text-[1.25rem]">
                  Tổng cộng, Hoàng phải chịu trách nhiệm hình sự về gần 40kg MDMA và 5kg ketamine. Để vận hành khâu bán lẻ, Hoàng thuê Nguyễn Tuấn Anh nhận hàng, Huỳnh Thanh Hưng cất giữ và phân chia, còn Huỳnh Thanh Hảo trực tiếp giao hàng. Riêng Hảo được xác định đã thực hiện 500 đơn giao ma túy bán lẻ theo chỉ đạo của Hoàng, với tổng khối lượng qua tay hơn 1kg ketamine và MDMA.
                </p>
                <p className="text-[1.25rem]">
                  Từ Hoàng, ma túy tiếp tục chảy xuống hai đầu mối bán lẻ khác. <strong>Lê Thắng Anh Tú</strong> nhiều lần mua lại của Hoàng, tổng cộng gần 32kg MDMA, đồng thời tự mua thêm ketamine để bán lại, thuê Đào Duy Phương nhận, cất giữ và giao hàng cho khách với tiền công 40 triệu đồng mỗi tháng. HĐXX xác định Tú chịu trách nhiệm hơn 35kg MDMA, hơn 14kg ketamine và hơn 11kg ma túy các loại khác. <strong>Văn Hoàng Minh</strong>, sinh năm 2000, mua 10.000 viên MDMA, tương đương khoảng 3,9kg với giá 800 triệu đồng, rồi chỉ đạo Hưng bán lại một phần, chịu trách nhiệm hơn 6kg ma túy các loại. Cả Hoàng, Tú và Minh đều bị tuyên án <strong>tử hình</strong>.
                </p>
              </div>
            </div>

            {/* Cột 2 */}
            <div className="p-6 bg-[#F9F7F1] border border-[#1B1B1F]">
              <h3 className="font-title-editorial text-[#7A1F1F] text-2xl font-bold uppercase tracking-wider pb-3 mb-4 ">
                Nhóm Telegram độc lập, và nguồn Campuchia
              </h3>
              <div className="space-y-4 font-body-regular text-[#1B1B1F] text-justify leading-relaxed">
                <p className="text-[1.25rem]">
                  Bên cạnh hệ thống của Nậm, cơ quan điều tra còn phát hiện hai nhánh khác cùng bị gộp vào đại án. Nhóm của <strong>Lê Nguyễn Gia Bảo</strong> và <strong>Trần Kiến An</strong> lập các nhóm kín trên Telegram để chỉ đạo đồng phạm nhận, cất giữ và giao ma túy. HĐXX đánh giá An không giữ vai trò thứ yếu mà cùng Bảo trực tiếp tổ chức, điều hành hoạt động mua bán. Ngày 13/11/2022, Quân bán cho Bảo 4kg và bán cho An 1kg, cùng giá 427 triệu đồng mỗi kg. Bảo bị xác định chịu trách nhiệm hơn 11,2kg ketamine, hơn 5,1kg thuốc lắc và hơn 17kg ma túy các loại khác.
                </p>
                <p className="text-[1.25rem]">
                  Nhánh còn lại do <strong>Phạm Anh Khoa</strong> cầm đầu, người nhiều lần trực tiếp sang Campuchia mua ma túy đưa về Việt Nam. Khoa chịu trách nhiệm hơn 7kg ma túy tổng hợp, trong đó một phần bán cho chính <strong>Lê Thắng Anh Tú</strong>.
                </p>
                <p className="text-[1.25rem]">
                  Riêng <strong>Phạm Đức Duy</strong>, từ người sử dụng ma túy trở thành đầu mối mua bán, ba lần đặt hàng từ một người tên Hòa, danh tính chưa được công bố đầy đủ, rồi rủ thêm người tham gia cất giữ, đóng gói, giao hàng. Ngày 28/8/2023, công an bắt quả tang khi Duy chỉ đạo đồng phạm giao hàng, khám xét nơi ở thu giữ hơn 5kg ma túy các loại. Duy, cùng với Bảo, An, Quân và Khoa, đều bị tuyên án <strong>tử hình</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================== TOÀN CẢNH: 11 ÁN TỬ HÌNH ==================== */}
        <div className="w-full bg-[#F9F7F1] border border-[#1B1B1F] p-8 mb-12">
          <div className="flex flex-wrap items-center justify-between pb-3 mb-6 border-b border-[#1B1B1F]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#7A1F1F] inline-block" />
              <h3 className="font-title-editorial text-[#7A1F1F] text-3xl font-bold uppercase tracking-wider">
                Toàn cảnh: một chuyến bay, bốn nhánh, mười một án tử hình
              </h3>
            </div>
            <span className="font-mono text-xs text-[#1F2A44] font-semibold tracking-wider">
              [GIAI ĐOẠN 1 // HĐXX TAND TP.HCM]
            </span>
          </div>
          <p className="font-body-regular text-[#1B1B1F] text-justify leading-relaxed text-[1.25rem] mb-10 max-w-5xl">
            Từ vụ phát hiện ma túy trong hành lý 4 tiếp viên hàng không, cơ quan điều tra đã mở rộng, lần ra gần 500 nhánh và phân nhánh trải khắp cả nước, tại 34 tỉnh, thành. Nhà chức trách khởi tố 477 vụ án với hơn 2.700 bị can, thu giữ gần 600kg ma túy các loại cùng súng, lựu đạn. Dòng tiền giao dịch của toàn bộ mạng lưới được xác định lên tới gần 29.000 tỷ đồng.
          </p>

          {/* 11 Human Silhouettes Row with Tooltips */}
          <div className="w-full py-8 my-4 border-y border-[#E0DDD5] bg-[#F9F7F1]">
            <div className="w-full flex justify-center items-end flex-wrap gap-8">
              {DEFENDANTS_11.map((d) => (
                <div key={d.id} className="person-wrapper relative cursor-pointer flex flex-col items-center group">
                  <div className="tooltip-box absolute bottom-[80px] left-1/2 -translate-x-1/2 z-50 bg-[#1F2A44] border border-white text-white text-xs p-3 text-left w-[220px] leading-[1.4]">
                    <strong className="font-bold text-white block mb-1">Bị cáo: {d.name}</strong>
                    <span className="text-gray-200">Nhánh: {d.branch}</span>
                    <br />
                    <span className="text-gray-200">Khối lượng: {d.volume}</span>
                  </div>
                  <svg
                    className="person-silhouette h-[70px] w-auto fill-[#1B1B1F] group-hover:fill-[#7A1F1F] select-none block transition-colors"
                    viewBox="0 0 32 70"
                  >
                    <polygon points="11,0 21,0 22,12 10,12" />
                    <polygon points="4,16 28,16 24,42 8,42" />
                    <polygon points="8,44 14,44 13,70 8,70" />
                    <polygon points="18,44 24,44 24,70 19,70" />
                  </svg>
                  <span className="mt-2 font-mono text-[10px] text-gray-600 group-hover:text-[#7A1F1F] font-bold">
                    #{d.id < 10 ? `0${d.id}` : d.id}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="font-body-regular text-[#1B1B1F] text-justify leading-relaxed text-[1.25rem] mt-8 max-w-5xl">
            Trong khi phần lớn án tử hình đến từ các nhánh mua bán và phân phối, Hoàng Sỹ Thắng và Bùi Văn Ánh, hai người trực tiếp cầm hàng qua sân bay, bị kết án theo một tội danh khác là Vận chuyển trái phép chất ma túy, và chỉ nhận án chung thân.
          </p>
        </div>
      </div>
    </section>
  );
};
