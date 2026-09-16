import React from 'react';
import { useActiveChapter } from '../hooks/useActiveChapter';

interface CaseFile {
  id: number;
  url: string;
}

const CASE_FILES: CaseFile[] = [
  { id: 1, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=0#gid=0' },
  { id: 2, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=736574927#gid=736574927' },
  { id: 3, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1240347235#gid=1240347235' },
  { id: 4, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1508281912#gid=1508281912' },
  { id: 5, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1592666110#gid=1592666110' },
  { id: 6, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=117420515#gid=117420515' },
  { id: 7, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=669687108#gid=669687108' },
  { id: 8, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1471405274#gid=1471405274' },
  { id: 9, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=742736648#gid=742736648' },
  { id: 10, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=2050271861#gid=2050271861' },
  { id: 11, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1357420741#gid=1357420741' },
  { id: 12, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1695650243#gid=1695650243' },
  { id: 13, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1756266529#gid=1756266529' },
  { id: 14, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1769088725#gid=1769088725' },
  { id: 15, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=960027517#gid=960027517' },
  { id: 16, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1914973834#gid=1914973834' },
  { id: 17, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1581893313#gid=1581893313' },
  { id: 18, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=1294024990#gid=1294024990' },
  { id: 19, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=865830396#gid=865830396' },
  { id: 20, url: 'https://docs.google.com/spreadsheets/d/1lSn4Hc5aqqGVn3Sa3Tba5s6zFZi9FMlbv5MrNK4Ag_M/edit?gid=961085359#gid=961085359' },
];

export const Chapter6Verdict: React.FC = () => {
  const isActive = useActiveChapter(6);

  return (
    <section
      id="chuong-6-ban-an"
      className="w-full py-20 px-6 border-t-2 border-b-2 border-[#1B1B1F] bg-[#F9F7F1] text-[#1B1B1F]"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-8">
          <span className="font-mono inline-block px-3 py-1 bg-[#ECE8DF] border border-[#1B1B1F] text-[#1F2A44] text-[11px] font-bold uppercase tracking-widest mb-4">
            PHÁN QUYẾT TÒA ÁN // ĐẠI ÁN VN10
          </span>
          <h2 className={`font-title-editorial text-center text-4xl sm:text-5xl font-bold uppercase tracking-wide mb-4 border-b-2 border-[#1B1B1F] pb-4 transition-all duration-300 ${
            isActive ? 'text-[#7A1F1F] drop-shadow-lg' : 'text-[#1B1B1F]'
          }`}>
            Chương 6 - Bản án (3/9/2026)
          </h2>
          <p className="text-justify sm:text-center text-[1.25rem] leading-relaxed max-w-3xl mx-auto">
            Ngày 3/9/2026, Tòa án nhân dân TP.HCM tuyên án đối với 227 bị cáo trong vụ án ma túy VN10. Các bị cáo bị xét xử về nhiều tội danh, trong đó có mua bán, vận chuyển, tàng trữ và tổ chức sử dụng trái phép chất ma túy.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-10 flex flex-col gap-4 leading-relaxed text-justify">
          <p className="text-[1.25rem]">
            HĐXX tuyên 11 bị cáo án tử hình do giữ vai trò cầm đầu, tổ chức đường dây và trực tiếp giao dịch số lượng ma túy đặc biệt lớn; 19 bị cáo chịu mức án tù chung thân về các hành vi mua bán, vận chuyển ma túy xuyên biên giới và nội địa.
          </p>
          <p className="text-[1.25rem]">
            Một số người được dư luận chú ý trong vụ án gồm các đối tượng có sức ảnh hưởng trên mạng xã hội và trong giới nghệ thuật, giải trí bị tuyên các mức án nghiêm khắc tương ứng với hành vi tổ chức, lôi kéo và tàng trữ sử dụng trái phép chất ma túy.
          </p>
          <p className="text-[1.25rem]">
            Các bị cáo còn lại bị tuyên các mức án từ cải tạo không giam giữ, án treo cho đến tù có thời hạn từ 2 năm đến 20 năm, bảo đảm nguyên tắc cá thể hóa hình phạt, phân hóa vai trò và mở rộng tối đa chính sách khoan hồng của pháp luật đối với người thừa nhận hành vi, ăn năn hối cải.
          </p>
          <p className="text-[1.25rem]">
            Theo HĐXX, cáo trạng của Viện kiểm sát truy tố các bị cáo là hoàn toàn có căn cứ, đúng người, đúng tội, đúng pháp luật. Bản án được tuyên là hồi chuông cảnh tỉnh nghiêm khắc nhất trước hiểm họa thâm nhập của ma túy qua đường hàng không, đồng thời khẳng định bản lĩnh tuyệt đối của lực lượng chức năng trong cuộc chiến bảo vệ an ninh trật tự xã hội.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-6 border-t border-[#1B1B1F] pt-6">
          <h3 className="font-title-editorial text-xl font-bold uppercase">
            Mức án cụ thể của 227 bị cáo trong vụ án được thể hiện dưới đây:
          </h3>
          <span className="font-mono block text-xs text-[#7A1F1F] font-semibold mt-1.5">
            NHẤP VÀO TỪNG VỤ ÁN ĐỂ MỞ HỒ SƠ CHI TIẾT ĐỐI TƯỢNG VÀ PHÁN QUYẾT TÒA ÁN
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {CASE_FILES.map((item) => (
            <a
              key={item.id}
              href={item.url || undefined}
              target="_blank"
              rel="noopener noreferrer"
              aria-disabled={!item.url}
              className={`font-mono text-center text-[13px] font-semibold uppercase tracking-wide py-5 px-2.5 border border-[#1B1B1F] transition-colors ${
                item.url
                  ? 'text-[#1B1B1F] hover:bg-[#7A1F1F] hover:text-white hover:border-[#7A1F1F] cursor-pointer'
                  : 'text-gray-400 cursor-not-allowed pointer-events-none'
              }`}
            >
              Vụ án số {item.id}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
