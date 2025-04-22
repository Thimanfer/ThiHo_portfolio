"use client"
import React from "react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

export function ProjectCardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} techStack={card.techStack} />
  ))

  return (
    <div className="my-10">
      <Carousel items={cards} />
    </div>
  )
}

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="https://assets.aceternity.com/macbook.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         )
//       })}
//     </>
//   )
// }

const data = [
  {
    category: "Mobile - Store",
    title: "Mobile phone store management system",
    src: "/images/mockup/hivello_mockup.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Hệ thống quản lý cửa hàng điện thoại di động.
          </span>{" "}
          Được xây dựng bằng Java Spring Boot, Thymeleaf và MySQL. Hỗ trợ quản lý sản phẩm, khách hàng, hóa đơn, tồn kho, phân quyền nhân viên. Giao diện thân thiện sử dụng Bootstrap.
        </p>
      </div>
    ),
    techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"],
  },
  {
    category: "Travel - Website",
    title: "Travel Booking Full-Stack",
    src: "/images/mockup/growing_mockup.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Website đặt tour du lịch full-stack.
          </span>{" "}
          Phát triển bằng Next.js, React, Node.js, Express và MongoDB. Tích hợp chức năng đặt tour, đăng nhập người dùng, tìm kiếm tour, xác nhận thanh toán, và quản trị nội dung. Redux được dùng để quản lý trạng thái toàn cục.
        </p>
      </div>
    ),
    techStack: ["Next.js", "React.js", "Node.js", "Express.js", "MongoDB", "redux"],
  },
  {
    category: "Cake - Website",
    title: "Growing Cake",
    src: "/images/mockup/tracki_mockup.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Website giới thiệu và bán bánh kem.
          </span>{" "}
          Thiết kế với HTML, CSS, JavaScript và Bootstrap. Giao diện đơn giản nhưng hiện đại, có phần giới thiệu sản phẩm, đặt hàng, form liên hệ và điều hướng mượt mà trên cả desktop và thiết bị di động.
        </p>
      </div>
    ),
    techStack: ["html", "css", "js", "bootstrap"],
  },
  {
    category: "Student Management",
    title: "Student Management with RMI",
    src: "/images/mockup/ilotusland_mockup.png",
    content: (
      <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700 dark:text-neutral-200">
            Ứng dụng quản lý sinh viên với Java RMI.
          </span>{" "}
          Ứng dụng client-server dùng Java RMI để xử lý từ xa. Kết hợp Spring Boot, Thymeleaf và MySQL cho backend và giao diện. Cho phép thêm/sửa/xoá sinh viên, phân loại theo lớp và điểm trung bình.
        </p>
      </div>
    ),
    techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap", "Java RMI"],
  },
]
