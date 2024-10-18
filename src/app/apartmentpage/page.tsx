'use client';
import { useEffect } from 'react';
import FollowUs from "../components/followus/followus";
import "./main.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Page() {
    useEffect(() => {
        const filterTabs = document.querySelectorAll('.project-filter li'); // Tất cả các tab
        const items = document.querySelectorAll('.single-item'); // Tất cả các mục dự án

        // Thiết lập tab hoạt động ban đầu
        const initialActiveTab = document.querySelector('.project-filter li[data-filter="*"]');
        if (initialActiveTab) {
            initialActiveTab.classList.add('active');
        }

        const handleFilterClick = (event: Event) => {
            const target = event.currentTarget as HTMLElement;
            const filterValue = target.getAttribute('data-filter') || '';
            filterTabs.forEach(t => t.classList.remove('active'));
            target.classList.add('active');
            // Ẩn tất cả các mục ban đầu
            items.forEach(item => (item as HTMLElement).style.display = 'none');

            // Hiển thị các mục dựa trên giá trị bộ lọc
            if (filterValue === '*') {
                items.forEach(item => (item as HTMLElement).style.display = 'block'); // Hiển thị tất cả các mục cho "All"
            } else {
                let itemsToShow = 0;

                // Thiết lập số lượng mục dựa trên giá trị bộ lọc
                if (filterValue === '.bedroom') {
                    itemsToShow = 1;
                } else if (filterValue === '.bedroom-2') {
                    itemsToShow = 2;
                } else if (filterValue === '.bedroom-3') {
                    itemsToShow = 1;
                } else if (filterValue === '.pent') {
                    itemsToShow = 2;
                } else if (filterValue === '.town') {
                    itemsToShow = 3;
                }

                // Hiển thị các mục dựa trên số lượng mục cần hiển thị
                const filteredItems = document.querySelectorAll(filterValue);
                let displayedCount = 0;

                filteredItems.forEach(item => {
                    if (displayedCount < itemsToShow) {
                        (item as HTMLElement).style.display = 'block';
                        displayedCount++;
                    }
                });
            }
        };

        filterTabs.forEach(tab => {
            tab.addEventListener('click', handleFilterClick as EventListener);
        });

        // Hiển thị tất cả 6 căn hộ khi tải trang
        items.forEach((item, index) => {
            if (index < 6) (item as HTMLElement).style.display = 'block';
        });

        // Dọn dẹp sự kiện khi component unmount
        return () => {
            filterTabs.forEach(tab => {
                tab.removeEventListener('click', handleFilterClick as EventListener);
            });
        };
    }, []);

    return (
        <>
            <section className="bg-[#1a1b1d] py-20">
                <div className="container">
                    {/* Bộ lọc và Chọn quốc gia */}
                    <div className="mb-6">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            {/* Menu Bộ lọc */}
                            <ul className="project-filter flex flex-wrap space-x-6 items-center w-full md:w-2/3 max-w-4xl list-none">
                                <li className="text-sm text-[#ffffff] inline-flex cursor-pointer leading-none" data-filter="*">
                                    All Apartments
                                </li>
                                <li className="text-sm text-[#ffffff] inline-flex cursor-pointer leading-none" data-filter=".bedroom">
                                    1 Bedroom
                                </li>
                                <li className="text-sm text-[#ffffff] inline-flex cursor-pointer leading-none" data-filter=".bedroom-2">
                                    2 Bedrooms
                                </li>
                                <li className="text-sm text-[#ffffff] inline-flex cursor-pointer leading-none" data-filter=".bedroom-3">
                                    3 Bedrooms
                                </li>
                                <li className="text-sm text-[#ffffff] inline-flex cursor-pointer leading-none" data-filter=".pent">
                                    Penthouses
                                </li>
                                <li className="text-sm text-[#ffffff] inline-flex cursor-pointer leading-none" data-filter=".town">
                                    Town Houses
                                </li>
                            </ul>

                            {/* Bộ lọc địa điểm */}
                            <div className="project-location-search w-full md:w-1/3 flex justify-end mt-4 md:mt-0 relative">
                                <select className="ddl-select bg-black text-white text-sm border border-[#bd8c62] w-full md:w-[370px] h-[60px] px-4 appearance-none focus:outline-none">
                                    <option className="bg-[#bd8c62] text-white">France</option>
                                    <option className="bg-[#bd8c62] text-white">India</option>
                                    <option className="bg-[#bd8c62] text-white">Australia</option>
                                </select>
                                {/* Mũi tên */}
                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                    <svg
                                        className="w-5 h-5 text-white transition-transform duration-300 transform"
                                        fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Danh sách căn hộ */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Căn hộ 1 */}
                        <div className="project-item mb-8 overflow-hidden transition duration-400 single-item bedroom town">
                            <div className="project-thumb overflow-hidden">
                                <img
                                    src="images/image/416x414/416x414.jpg"
                                    alt="project"
                                    className="w-full h-64 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
                                />
                            </div>
                            <div className="project-content bg-[#2b2c30] p-6">
                                <h4 className="project-item-title mb-4 text-lg text-white font-serif">The Future Home</h4>
                                <ul className="project-list flex flex-wrap gap-5">
                                    <li className="flex items-center">
                                        <i className="fas fa-bed" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 3</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-toilet" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 2</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-expand" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">1800 m²</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Căn hộ 2 */}
                        <div className="project-item mb-8 overflow-hidden transition duration-400 single-item bedroom-2 bedroom-3 pent">
                            <div className="project-thumb relative overflow-hidden">
                                <div className="absolute top-2 right-2 bg-[#bd8c62] text-white text-xs font-semibold px-2 py-1 z-10">
                                    New
                                </div>
                                <img
                                    src="images/image/416x414/416x414.jpg"
                                    alt="project"
                                    className="w-full h-64 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
                                />
                            </div>
                            <div className="project-content bg-[#2b2c30] p-6">
                                <h4 className="project-item-title mb-4 text-lg text-white font-serif">Spacious Apartment</h4>
                                <ul className="project-list flex flex-wrap gap-5">
                                    <li className="flex items-center">
                                        <i className="fas fa-bed" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 3</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-toilet" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 2</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-expand" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">1800 m²</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Căn hộ 3 */}
                        <div className="project-item mb-8 overflow-hidden transition duration-400 single-item bedroom-2 town">
                            <div className="project-thumb overflow-hidden">
                                <img
                                    src="images/image/416x414/416x414.jpg"
                                    alt="project"
                                    className="w-full h-64 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
                                />
                            </div>
                            <div className="project-content bg-[#2b2c30] p-6">
                                <h4 className="project-item-title mb-4 text-lg text-white font-serif">Luxury Residence</h4>
                                <ul className="project-list flex flex-wrap gap-5">
                                    <li className="flex items-center">
                                        <i className="fas fa-bed" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 3</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-toilet" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 2</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-expand" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">1800 m²</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Căn hộ 4 */}
                        <div className="project-item mb-8 overflow-hidden transition duration-400 single-item bedroom-1 town">
                            <div className="project-thumb overflow-hidden">
                                <img
                                    src="images/image/416x414/416x414.jpg"
                                    alt="project"
                                    className="w-full h-64 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
                                />
                            </div>
                            <div className="project-content bg-[#2b2c30] p-6">
                                <h4 className="project-item-title mb-4 text-lg text-white font-serif">Family Apartment</h4>
                                <ul className="project-list flex flex-wrap gap-5">
                                    <li className="flex items-center">
                                        <i className="fas fa-bed" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 3</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-toilet" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 2</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-expand" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">1800 m²</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Căn hộ 5 */}
                        <div className="project-item mb-8 overflow-hidden transition duration-400 single-item bedroom-3">
                            <div className="project-thumb overflow-hidden">
                                <img
                                    src="images/image/416x414/416x414.jpg"
                                    alt="project"
                                    className="w-full h-64 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
                                />
                            </div>
                            <div className="project-content bg-[#2b2c30] p-6">
                                <h4 className="project-item-title mb-4 text-lg text-white font-serif">Modern Living Space</h4>
                                <ul className="project-list flex flex-wrap gap-5">
                                    <li className="flex items-center">
                                        <i className="fas fa-bed" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 3</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-toilet" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 2</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-expand" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">1800 m²</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Căn hộ 6 */}
                        <div className="project-item mb-8 overflow-hidden transition duration-400 single-item pent">
                            <div className="project-thumb overflow-hidden">
                                <img
                                    src="images/image/416x414/416x414.jpg"
                                    alt="project"
                                    className="w-full h-64 object-cover transition-transform duration-300 transform scale-100 hover:scale-110"
                                />
                            </div>
                            <div className="project-content bg-[#2b2c30] p-6">
                                <h4 className="project-item-title mb-4 text-lg text-white font-serif">Penthouse Suite</h4>
                                <ul className="project-list flex flex-wrap gap-5">
                                    <li className="flex items-center">
                                        <i className="fas fa-bed" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 3</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-toilet" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">x 2</span>
                                    </li>
                                    <li className="flex items-center">
                                        <i className="fas fa-expand" style={{ fontSize: 16, color: "#bd8c62" }}></i>
                                        <span className="ml-1 text-white text-sm font-sans">1800 m²</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FollowUs />
        </>
    );
}