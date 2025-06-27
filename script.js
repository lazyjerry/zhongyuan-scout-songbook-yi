// ====== 變數與設定 ======
        // 圖片路徑前綴
        const imagePathPrefix = "./images/";
        
       // 圖片陣列
        const imageFiles = [
            "封面.JPG", "A1.JPG", "A2.JPG", "A3.JPG", "A4.JPG", "A5.JPG", 
            "A6.JPG", "A7.JPG", "A8.JPG", "A9.JPG", "A10.JPG", "A11.JPG", 
            "A12.JPG", "A13.JPG", "Page1.JPG", "Page2.JPG", "Page3.JPG", 
            "Page4.JPG", "Page5.JPG", "Page6.JPG", "Page7.JPG", "Page8.JPG", 
            "Page9.JPG", "Page10.JPG", "Page11.JPG", "Page12.JPG", "Page13.JPG", 
            "Page14.JPG", "Page15.JPG", "Page16.JPG", "Page17.JPG", "Page18.JPG", 
            "Page19.JPG", "Page20.JPG", "Page21.JPG", "Page22.JPG", "Page23.JPG", 
            "Page24.JPG", "Page25.JPG", "Page26.JPG", "Page27.JPG", "Page28.JPG", 
            "Page29.JPG", "Page30.JPG", "Page31.JPG", "Page32.JPG", "Page33.JPG", 
            "Page34.JPG", "Page35.JPG", "Page36.JPG", "Page37.JPG", "Page38.JPG", 
            "Page39.JPG", "Page40.JPG", "Page41.JPG", "Page42.JPG", "Page43.JPG", 
            "Page44.JPG", "Page45.JPG", "Page46.JPG", "Page47.JPG", "Page48.JPG", 
            "Page49.JPG", "Page50.JPG", "Page51.JPG", "Page52.JPG", "Page53.JPG", 
            "Page54.JPG", "Page55.JPG", "Page56.JPG", "Page57.JPG", "Page58.JPG", 
            "Page59.JPG", "Page60.JPG", "Page61.JPG", "Page62.JPG", "Page63.JPG", 
            "Page64.JPG", "Page65.JPG", "Page66.JPG", "Page67.JPG", "Page68.JPG", 
            "Page69.JPG", "Page70.JPG", "Page71.JPG", "Page72.JPG", "Page73.JPG", 
            "Page74.JPG", "Page75.JPG", "Page76.JPG", "Page77.JPG", "Page78.JPG", 
            "Page79.JPG", "Page80.JPG", "Page81.JPG", "Page82.JPG", "Page83.JPG", 
            "Page84.JPG", "Page85.JPG", "Page86.JPG", "Page87.JPG", "Page88.JPG", 
            "Page89.JPG", "Page90.JPG", "Page91.JPG", "Page92.JPG", "Page93.JPG", 
            "Page94.JPG", "Page95.JPG", "Page96.JPG", "Page97.JPG", "Page98.JPG", 
            "Page99.JPG", "Page100.JPG", "Page101.JPG", "Page102.JPG", "Page103.JPG", 
            "Page104.JPG", "Page105.JPG", "Page106.JPG", "Page107.JPG", "Page108.JPG", 
            "Page109.JPG", "Page110.JPG", "Page111.JPG", "Page112.JPG", "Page113.JPG", 
            "Page114.JPG", "Page115.JPG", "Page116.JPG", "Page117.JPG", "Page118.JPG", 
            "Page119.JPG", "Page120.JPG", "Page121.JPG", "Page122.JPG", "Page123.JPG", 
            "Page124.JPG", "Page125.JPG", "Page126.JPG", "Page127.JPG", "Page128.JPG", 
            "Page129.JPG", "Page130.JPG", "Page131.JPG", "Page132.JPG", "Page133.JPG", 
            "Page134.JPG", "Page135.JPG", "Page136.JPG", "Page137.JPG", "Page138.JPG", 
            "Page139.JPG", "Page140.JPG", "Page141.JPG", "Page142.JPG", "Page143.JPG", 
            "Page144.JPG", "Page145.JPG", "Page146.JPG", "Page147.JPG", "Page148.JPG", 
            "Page149.JPG", "Page150.JPG", "Page151.JPG", "Page152.JPG", "Page153.JPG", 
            "Page154.JPG", "Page155.JPG", "Page156.JPG", "Page157.JPG", "Page158.JPG", 
            "Page159.JPG", "Page160.JPG", "Page161.JPG", "Page162.JPG", "Page163.JPG", 
            "Page164.JPG", "Page165.JPG", "Page166.JPG", "Page167.JPG", "Page168.JPG", 
            "Page169.JPG", "Page170.JPG", "Page171.JPG", "Page172.JPG", "Page173.JPG", 
            "Page174.JPG", "Page175.JPG", "Page176.JPG", "Page177.JPG", "Page178.JPG", 
            "Page179.JPG", "Page180.JPG", "Page181.JPG", "Page182.JPG", "Page183.JPG", 
            "Page184.JPG", "Page185.JPG", "Page186.JPG", "Page187.JPG", "Page188.JPG", 
            "Page189.JPG", "Page190.JPG", "Page191.JPG", "Page192.JPG", "Page193.JPG", 
            "Page194.JPG", "Page195.JPG", "Page196.JPG", "Page197.JPG", "Page198.JPG", 
            "Page199.JPG", "Page200.JPG", "Page201.JPG", "Page202.JPG", "Page203.JPG", 
            "Page204.JPG", "Page205.JPG", "Page206.JPG", "Page207.JPG", "Page208.JPG", 
            "Page209.JPG", "Page210.JPG", "Page211.JPG", "Page212.JPG", "Page213.JPG", 
            "Page214.JPG", "Page215.JPG", "Page216.JPG", "Page217.JPG", "Page218.JPG", 
            "Page219.JPG", "Page220.JPG", "Page221.JPG", "Page222.JPG", "Page223.JPG", 
            "Page224.JPG", "Page225.JPG", "Page226.JPG", "Page227.JPG", "Page228.JPG", 
            "Page229.JPG", "Page230.JPG", "Page231.JPG", "Page232.JPG", "Page233.JPG", 
            "Page234.JPG", "Page235.JPG", "B1.JPG", "B2.JPG", "B3.JPG", "B4.JPG", 
            "B5.JPG", "B6.JPG", "B7.JPG", "B8.JPG", "B9.JPG", "IMG_2674.JPG", 
            "IMG_2675.JPG", "IMG_2676.JPG", "IMG_2677.JPG", "IMG_2678.JPG", "IMG_2688.JPG", 
            "IMG_2689.JPG", "封底.JPG"
        ];

        // ====== DOM 元素 ======
        const pagesContainer = document.getElementById('pages');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const firstPageBtn = document.getElementById('firstPageBtn');
        const lastPageBtn = document.getElementById('lastPageBtn');
        const pageInput = document.getElementById('pageInput');
        const totalPagesSpan = document.getElementById('totalPages');
        const swipeLeft = document.getElementById('swipeLeft');
        const swipeRight = document.getElementById('swipeRight');
        const orientationWarning = document.querySelector('.orientation-warning');

        // ====== 狀態變數 ======
        let currentPage = 1; // 當前頁碼
        let isMobile = window.innerWidth <= 768; // 是否為手機
        let ignoreOrientationWarning = localStorage.getItem('ignoreOrientationWarning') === 'true';

        // ====== 初始化 ======
        function init() {
            // 顯示總頁數
            totalPagesSpan.textContent = `/ ${imageFiles.length}`;
            pageInput.max = imageFiles.length;
            
            // 從 localStorage 載入上次瀏覽頁碼
            const savedPage = localStorage.getItem('songbookCurrentPage');
            if (savedPage) {
                currentPage = parseInt(savedPage);
                if (currentPage < 1) currentPage = 1;
                if (currentPage > imageFiles.length) currentPage = imageFiles.length;
            }
            
            updatePages(); // 顯示頁面
            setupEventListeners(); // 註冊事件
            
            // 若已選擇忽略橫向提示則隱藏
            if (ignoreOrientationWarning) {
                orientationWarning.style.display = 'none';
            }

            // 依照網址參數設定頁碼
            const urlParams = new URLSearchParams(window.location.search);
            const pageParam = urlParams.get('page');
            if (pageParam) {
                const pageNum = parseInt(pageParam);
                if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= imageFiles.length) {
                    currentPage = pageNum;
                    goToPage(pageNum);
                }
            }   
        }

        // ====== 註冊事件 ======
        function setupEventListeners() {
            prevBtn.addEventListener('click', goToPrevPage); // 上一頁
            nextBtn.addEventListener('click', goToNextPage); // 下一頁
            firstPageBtn.addEventListener('click', () => goToPage(1)); // 首頁
            lastPageBtn.addEventListener('click', () => goToPage(imageFiles.length)); // 末頁
            pageInput.addEventListener('change', handlePageInput); // 頁碼輸入
            
            // 手機滑動事件
            let touchStartX = 0;
            let touchEndX = 0;
            
            swipeLeft.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            swipeLeft.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            swipeRight.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            });
            swipeRight.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            });
            
            // 桌機點擊滑動區域
            swipeLeft.addEventListener('click', goToPrevPage);
            swipeRight.addEventListener('click', goToNextPage);
            
            // 鍵盤左右鍵翻頁
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    goToPrevPage();
                } else if (e.key === 'ArrowRight') {
                    goToNextPage();
                }
            });
            
            // 視窗尺寸變化時處理
            window.addEventListener('resize', handleResize);
            
            // Modal 相關事件
            closeModalBtn.addEventListener('click', hideModal);
        }

        // ====== 處理滑動事件 ======
        function handleSwipe() {
            const threshold = 50; // 滑動閾值
            const difference = touchStartX - touchEndX;
            if (difference > threshold) {
                // 向左滑動(下一頁)
                goToNextPage();
            } else if (difference < -threshold) {
                // 向右滑動(上一頁)
                goToPrevPage();
            }
        }

        // ====== 處理頁碼輸入 ======
        function handlePageInput() {
            const pageNum = parseInt(pageInput.value);
            if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= imageFiles.length) {
                goToPage(pageNum);
            } else {
                pageInput.value = currentPage;
            }
        }

        // ====== 處理視窗尺寸變化 ======
        function handleResize() {
            const newIsMobile = window.innerWidth <= 768;
            if (newIsMobile !== isMobile) {
                isMobile = newIsMobile;
                updatePages();
            }
        }

        // ====== 跳轉到指定頁碼 ======
        function goToPage(pageNum) {
            // 確保頁碼在有效範圍內
            if (pageNum < 1) pageNum = 1;
            if (pageNum > imageFiles.length) pageNum = imageFiles.length;
            // 更新當前頁面並儲存到本地存儲
            currentPage = pageNum;
            localStorage.setItem('songbookCurrentPage', currentPage.toString());
            // 更新頁面顯示
            updatePages();

            // 依照當前頁數更新網址參數
            const url = new URL(window.location.href);
            url.searchParams.set('page', currentPage);
            window.history.replaceState({}, '', url.toString());
        }

        // ====== 上一頁 ======
        function goToPrevPage() {
            if (currentPage > 1) {
                goToPage(currentPage - 1); // 每次只跳一頁
            }
        }

        // ====== 下一頁 ======
        function goToNextPage() {
            if (currentPage < imageFiles.length) {
                goToPage(currentPage + 1); // 每次只跳一頁
            }
        }

        // ====== 更新頁面顯示 ======
        async function updatePages() {
            // 淡出當前頁面
            const currentPages = Array.from(pagesContainer.children);
            currentPages.forEach(page => {
                page.classList.add('fade-out');
            });
            // 等待淡出動畫完成
            await new Promise(resolve => setTimeout(resolve, 300));
            // 清除當前頁面
            pagesContainer.innerHTML = '';
            // 預載相鄰圖片
            if (currentPage > 1) {
                const prevImg = new Image();
                prevImg.src = imagePathPrefix + imageFiles[currentPage - 2];
            }
            if (currentPage < imageFiles.length) {
                const nextImg = new Image();
                nextImg.src = imagePathPrefix + imageFiles[currentPage];
            }
            // 更新頁碼輸入框
            pageInput.value = currentPage;
            // 決定要顯示哪些頁面（此處只顯示單頁）
            let pagesToShow = [currentPage];
            // 動態建立頁面元素
            pagesToShow.forEach(pageNum => {
                if (pageNum >= 1 && pageNum <= imageFiles.length) {
                    const pageDiv = document.createElement('div');
                    pageDiv.className = 'page bg-white rounded-lg overflow-hidden';
                    const img = document.createElement('img');
                    img.src = imagePathPrefix + imageFiles[pageNum - 1];
                    img.alt = `Page ${pageNum}`;
                    img.className = 'w-full h-full object-contain max-h-[80vh] cursor-pointer';
                    pageDiv.appendChild(img);
                    pageDiv.classList.add('fade-in');
                    pageDiv.classList.add('transition-opacity', 'duration-300');
                    // 點擊圖片開啟 Modal
                    pageDiv.addEventListener('click', () => {
                        showModal(imagePathPrefix + imageFiles[pageNum - 1]);
                    });
                    pagesContainer.appendChild(pageDiv);
                }
            });
            // 更新按鈕狀態
            prevBtn.disabled = currentPage <= 1;
            nextBtn.disabled = currentPage >= imageFiles.length;
            firstPageBtn.disabled = currentPage <= 1;
            lastPageBtn.disabled = currentPage >= imageFiles.length;

            
        }

        // ====== 忽略橫向提示 ======
        function continueAnyway() {
            ignoreOrientationWarning = true;
            localStorage.setItem('ignoreOrientationWarning', 'true');
            orientationWarning.style.display = 'none';
        }

        // ====== 初始化應用 ======
        window.addEventListener('DOMContentLoaded', init);

        // ====== Modal 相關函式（需自行補上 showModal/hideModal 等） ======
        // ====== Modal 相關函式 ======
        let modalCurrentIndex = null;

        const imageModal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');

        function showModal(imgSrc) {
            // 找出目前圖片在 imageFiles 的 index
            modalCurrentIndex = imageFiles.findIndex(f => (imagePathPrefix + f) === imgSrc || (imagePathPrefix + f) === decodeURI(imgSrc));
            if (modalCurrentIndex === -1) {
            modalCurrentIndex = currentPage - 1;
            }
            updateModalImage();
            imageModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function hideModal() {
            imageModal.classList.add('hidden');
            document.body.style.overflow = '';
        }

        function updateModalImage() {
            modalImage.src = imagePathPrefix + imageFiles[modalCurrentIndex];
            modalImage.alt = `Page ${modalCurrentIndex + 1}`;
            
        }