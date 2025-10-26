# React ile Dinamik Pizza Sipariş Uygulaması

Bu proje, kullanıcıların pizza siparişi verebileceği dinamik ve interaktif bir web uygulamasıdır. React kullanarak geliştirilmiştir ve kullanıcıların pizzalarını kişiselleştirmelerine olanak tanır.

# React Dynamic Pizza Ordering Application

This project is a dynamic and interactive web application where users can order pizza. It is developed with React and allows users to customize their pizzas.

---

## TR Özellikler

- **Pizza Özelleştirme:** Kullanıcılar hamur kalınlığı, boyut ve en fazla 10 adet ek malzeme seçebilir.
- **Dinamik Fiyatlandırma:** Seçilen malzemelere ve diğer seçeneklere göre sipariş toplamı anında güncellenir.
- **Form Doğrulama:** Sipariş formundaki alanlar için gerekli doğrulamalar yapılır.
- **Sipariş Akışı:** Ana sayfa, sipariş oluşturma sayfası ve sipariş onayı (başarı) sayfası olmak üzere 3 adımdan oluşur.
- **Responsive Tasarım:** Farklı ekran boyutlarına uyumlu bir arayüze sahiptir.

## ENG Features

- **Pizza Customization:** Users can choose dough thickness, size, and up to 10 additional toppings.
- **Dynamic Pricing:** The order total is instantly updated based on the selected toppings and other options.
- **Form Validation:** Necessary validations are performed for fields in the order form.
- **Order Flow:** Consists of 3 steps: a home page, an order creation page, and an order confirmation (success) page.
- **Responsive Design:** Features an interface that is compatible with different screen sizes.

---

## 🛠️ Kullanılan Teknolojiler (Technologies Used)

- **React:** Kullanıcı arayüzü için ana kütüphane.
- **React Router:** Sayfalar arası geçiş ve yönlendirme için.
- **Vite:** Hızlı ve modern bir geliştirme ortamı ve build aracı.
- **JavaScript (ES6+):** Uygulama mantığı.
- **CSS:** Stil ve tasarım.
- **Cypress:** Uçtan uca (End-to-End) testler için.
- **Axios:** API istekleri için.

---

## 🚀 Kurulum ve Başlatma (Installation and Setup)

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

To run the project on your local machine, follow these steps:

1.  **Projeyi klonlayın (Clone the project):**
    ```bash
    git clone https://github.com/Workintech/react-ile-dinamik-pizza-projesi.git
    cd react-ile-dinamik-pizza-projesi
    ```

2.  **Bağımlılıkları yükleyin (Install dependencies):**
    ```bash
    npm install
    ```

3.  **Geliştirme sunucusunu başlatın (Start the development server):**
    ```bash
    npm run dev
    ```
    Uygulama varsayılan olarak Vite tarafından atanan portta (genellikle `http://localhost:5173`) çalışacaktır. (The application will run on the port assigned by Vite, usually `http://localhost:5173`.)

---

## ✅ Testleri Çalıştırma (Running Tests)

Bu proje, kullanıcı akışlarının doğru çalıştığından emin olmak için Cypress ile yazılmış uçtan uca testler içerir.

This project includes end-to-end tests written with Cypress to ensure that user flows work correctly.

1.  **Cypress test arayüzünü açın (Open the Cypress test interface):**
    ```bash
    npx cypress open
    ```
2.  Açılan pencerede çalıştırmak istediğiniz test dosyasını seçin. (Select the test file you want to run in the window that opens.)
