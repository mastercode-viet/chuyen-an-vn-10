import React, { useState } from 'react';

export const Chapter5CourtExpansion: React.FC = () => {
  const [step, setStep] = useState<number>(1);

  // Generate 135 icons for network grid
  const networkIcons = Array.from({ length: 135 }, (_, i) => {
    const isRed = i % 8 === 0 || i % 13 === 0;
    return {
      id: i,
      color: isRed ? 'fill-[#7A1F1F]' : 'fill-[#1B1B1F]',
    };
  });

  return (
    <section
      id="chapter-5-interactive"
      className="w-full my-12 py-10 px-6 border-t-2 border-b-2 border-[#1B1B1F] bg-[#F9F7F1] flex flex-col"
      style={{ minHeight: '850px', position: 'relative' }}
    >
      <div className="max-w-[1200px] mx-auto w-full mb-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#7A1F1F] font-bold">
          MỤC LỤC // ĐẠI ÁN QUY MÔ &amp; TƯ PHÁP TOÀN CẢNH
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#1B1B1F] mt-1">
          CHƯƠNG 5: ĐẠI ÁN MỞ RỘNG VÀ CON SỐ 227
        </h2>
        <p className="font-sans text-sm text-[#1B1B1F]/80 max-w-3xl mt-1">
          Từ 4 nữ tiếp viên hàng không tại sân bay Tân Sơn Nhất, chuyên án VN10 đã mở rộng quy mô chưa từng có trong lịch sử tư pháp, bóc gỡ mạng lưới xuyên quốc gia với 227 bị cáo đưa ra xét xử trong 20 vụ án trọng điểm.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto w-full flex flex-col">
        {/* KHỐI ĐỒ HỌA TRÊN (~480px) */}
        <div className="relative w-full h-[480px] overflow-hidden border border-[#1B1B1F] bg-[#FFFFFF]">
          {/* Layer 1: 4 Tiếp viên lớn */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-300 ${
              step === 1 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-75 pointer-events-none'
            }`}
          >
            <div className="text-xs font-mono font-bold text-[#7A1F1F] uppercase mb-6 tracking-wider border-b border-[#1B1B1F] pb-1 w-full text-center">
              4 TIẾP VIÊN // ĐIỂM BẮT ĐẦU 16/3/2023
            </div>
            <div className="flex flex-row items-center justify-center gap-8 sm:gap-14 w-full my-auto">
              {['#01', '#02', '#03', '#04'].map((num) => (
                <div key={num} className="flex flex-col items-center">
                  <svg className="w-16 h-32 sm:w-20 sm:h-36 fill-[#1B1B1F]" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="font-mono text-xs sm:text-sm mt-3 font-bold text-[#1B1B1F]">{num}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 font-mono text-xs text-[#1B1B1F] bg-[#F9F7F1] border border-[#1B1B1F] py-2.5 px-6 text-center tracking-wider">
              157 tuýp chứa ma túy // &gt;11kg Ketamine &amp; Cocain
            </div>
          </div>

          {/* Layer 2: Lưới 100+ bóng người thu nhỏ */}
          <div
            className={`absolute inset-0 flex flex-col p-6 transition-all duration-300 ${
              step === 2 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="flex flex-wrap justify-between items-center border-b border-[#1B1B1F] pb-2 mb-3 gap-2">
              <span className="text-xs font-mono font-bold text-[#7A1F1F] uppercase tracking-wider">
                MẠNG LƯỚI TRUY XÉT // 227 BỊ CÁO
              </span>
              <span className="text-xs font-mono text-[#1B1B1F] font-bold tracking-wider">
                227 BỊ CÁO // 20 VỤ ÁN // 2.700 BỊ CAN // 29.000 TỶ ĐỒNG
              </span>
            </div>
            <div className="grid grid-cols-10 sm:grid-cols-12 md:grid-cols-15 gap-2 flex-1 content-center justify-items-center overflow-hidden py-2">
              {networkIcons.map((item) => (
                <div key={item.id} className="flex items-center justify-center p-0.5">
                  <svg className={`h-6 w-4.5 ${item.color} select-none`} viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t border-[#1B1B1F] flex justify-between font-mono text-[11px] text-[#1B1B1F]">
              <span>DÒNG TIỀN: ~29.000 TỶ ĐỒNG</span>
              <span className="text-[#7A1F1F] font-bold">TRẢI RỘNG TRÊN 34 TỈNH THÀNH</span>
            </div>
          </div>

          {/* Layer 3: Con dấu PHÁN QUYẾT */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-all duration-300 ${
              step === 3 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-150 pointer-events-none'
            }`}
          >
            <div className="font-mono text-xs text-[#1B1B1F] uppercase tracking-widest mb-4 font-bold">
              TÒA ÁN NHÂN DÂN TP. HỒ CHÍ MINH // 03/09/2026
            </div>
            <div className="border-4 border-[#7A1F1F] p-6 sm:p-10 text-center bg-[#FFFFFF] max-w-lg w-full">
              <h1 className="font-serif font-black text-4xl sm:text-6xl text-[#7A1F1F] tracking-widest uppercase leading-none">
                PHÁN QUYẾT
              </h1>
              <div className="font-mono text-xs text-[#7A1F1F] font-bold mt-3 tracking-widest border-t-2 border-[#7A1F1F] pt-3">
                227 BỊ CÁO // 20 VỤ ÁN TRỌNG ĐIỂM
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 w-full max-w-md text-center font-mono text-xs">
              <div className="border border-[#1B1B1F] p-3 bg-[#F9F7F1]">
                <div className="text-[#7A1F1F] font-bold text-xl leading-tight">11</div>
                <div className="mt-1 font-bold text-[11px]">TỬ HÌNH</div>
              </div>
              <div className="border border-[#1B1B1F] p-3 bg-[#F9F7F1]">
                <div className="font-bold text-xl leading-tight text-[#1B1B1F]">19</div>
                <div className="mt-1 font-bold text-[11px]">CHUNG THÂN</div>
              </div>
              <div className="border border-[#1B1B1F] p-3 bg-[#F9F7F1]">
                <div className="font-bold text-xl leading-tight text-[#1B1B1F]">197</div>
                <div className="mt-1 font-bold text-[11px]">CÓ THỜI HẠN</div>
              </div>
            </div>
          </div>
        </div>

        {/* KHỐI VĂN BẢN VÀ ĐIỀU HƯỚNG DƯỚI */}
        <div className="relative p-6 sm:p-8 border-l border-r border-b border-[#1B1B1F] bg-[#F9F7F1]">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
            {/* Vùng hiển thị văn bản theo từng bước */}
            <div className="flex-1">
              {step === 1 && (
                <article className="space-y-3">
                  <div className="font-mono text-xs font-bold text-[#7A1F1F] uppercase tracking-widest">
                    BƯỚC 01 // KHỞI PHÁT
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#1B1B1F]">
                    Một dấu vết, nhiều mắt xích
                  </h3>
                  <p className="font-sans text-[#1B1B1F] text-sm sm:text-base leading-relaxed text-justify">
                    Ngày 16/3/2023, từ dấu hiệu của 4 nữ tiếp viên hàng không trên chuyến bay VN10 từ Pháp về HCM, lực lượng chức năng kiểm tra 327 tuýp kem đánh răng và phát hiện 157 tuýp chứa ma túy. Tổng khối lượng ma túy thu giữ hơn 11 kg, bao gồm Ketamine và Cocain. Từ manh mối này, cơ quan điều tra xác lập chuyên án VN10, lần theo người gửi, nhận, vận chuyển, phân chia và tiêu thụ ma túy. Những mắt xích phía sau dần được bóc tách. Vụ việc không đơn giản là một chuyến vận chuyển đơn lẻ mà liên quan đến nhiều đường dây cùng các nhánh phạm tội khác nhau.
                  </p>
                </article>
              )}

              {step === 2 && (
                <article className="space-y-3">
                  <div className="font-mono text-xs font-bold text-[#7A1F1F] uppercase tracking-widest">
                    BƯỚC 02 // BÓC TÁCH MẠNG LƯỚI
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#1B1B1F]">
                    Hàng trăm đối tượng liên quan và thực hiện mạng lưới
                  </h3>
                  <p className="font-sans text-[#1B1B1F] text-sm sm:text-base leading-relaxed text-justify">
                    Theo kết quả điều tra, trước đó đường dây do Hà Danh Nậm (quê Nghệ An) cầm đầu đã tổ chức 7 chuyến vận chuyển ma túy từ Pháp về Việt Nam. Ma túy được ngụy trang dưới nhiều hình thức hàng hóa. Các chuyến hàng về đến Việt Nam được chuyển đến một đầu mối tại Đồng Nai do Hoàng Sỹ Thắng tiếp nhận, phân chia và chỉ đạo Bùi Văn Ánh giao hàng cho các đầu mối tiêu thụ tại TP.HCM và Bình Dương. Ở quy mô rộng hơn, hồ sơ vụ án cho thấy đường dây được tổ chức thành nhiều nhánh, sử dụng nhiều phương thức để che giấu hoạt động phạm tội. Đáng chú ý, các đối tượng còn sử dụng ứng dụng nhắn tin có tính bảo mật cao, tài khoản ngân hàng không chính chủ và nhiều hình thức ngụy trang hàng hóa để che giấu danh tính, giao dịch và dòng tiền. Sau quá trình truy xét và phá án, cơ quan chức năng xác định đường dây liên quan đến hơn 2.700 bị can trong 477 vụ án, với tổng dòng tiền giao dịch được xác định lên tới gần 29.000 tỷ đồng. Trong phạm vi chuyên án VN10 được đưa ra xét xử, có 227 bị cáo thuộc 20 vụ án.
                  </p>
                </article>
              )}

              {step === 3 && (
                <article className="space-y-3">
                  <div className="font-mono text-xs font-bold text-[#7A1F1F] uppercase tracking-widest">
                    BƯỚC 03 // BẢN ÁN TỐI HẬU
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#7A1F1F]">
                    Phán quyết
                  </h3>
                  <p className="font-sans text-[#1B1B1F] text-sm sm:text-base leading-relaxed text-justify">
                    Sau 17 ngày xét xử và nghị án kể từ ngày 17/8/2026, Tòa án Nhân dân Thành Phố Hồ Chí Minh tuyên án 227 bị cáo trong 20 vụ án thuộc chuyên án VN10 vào ngày 3/9/2026. Hội đồng xét xử đã phân hóa vai trò, mức độ tham gia và tình tiết từng bị cáo. Mức án trải rộng từ án treo, các mức tù có thời hạn cho tới tù chung thân và nặng nhất là tử hình.
                  </p>
                </article>
              )}
            </div>

            {/* Khối nút điều khiển và Status bên phải */}
            <div className="w-full md:w-80 flex flex-col gap-3 pt-2">
              <div className="border border-[#1B1B1F] p-3 bg-white font-mono text-xs flex justify-between items-center">
                <span className="text-gray-500 font-bold uppercase tracking-wider">TIẾN TRÌNH:</span>
                <span className="text-[#7A1F1F] font-bold">
                  {step === 1 && 'Bước 1 / 3: Khởi phát'}
                  {step === 2 && 'Bước 2 / 3: Mở rộng điều tra'}
                  {step === 3 && 'Bước 3 / 3: Bản án tối hậu'}
                </span>
              </div>

              {step === 1 && (
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full bg-[#1F2A44] hover:opacity-95 text-white font-sans text-xs uppercase tracking-widest font-bold py-3.5 px-6 border border-[#1B1B1F] transition-all text-center cursor-pointer"
                >
                  Mở rộng điều tra →
                </button>
              )}

              {step === 2 && (
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-full bg-[#7A1F1F] hover:opacity-95 text-white font-sans text-xs uppercase tracking-widest font-bold py-3.5 px-6 border border-[#1B1B1F] transition-all text-center cursor-pointer"
                >
                  Xem phán quyết cuối cùng →
                </button>
              )}

              {step === 3 && (
                <button
                  type="button"
                  disabled
                  className="w-full bg-gray-400 text-white font-sans text-xs uppercase tracking-widest font-bold py-3.5 px-6 border border-[#1B1B1F] transition-all text-center opacity-50 cursor-not-allowed"
                >
                  Đã hoàn thành phiên tòa
                </button>
              )}

              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-full bg-transparent hover:bg-[#ECE8DF] text-[#1B1B1F] font-mono text-xs uppercase tracking-wider py-2 px-4 border border-[#1B1B1F] transition-colors text-center font-bold cursor-pointer"
                >
                  Xem lại từ đầu ↺
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
