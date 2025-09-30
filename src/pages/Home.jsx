export const Home = () => {
  return (
    <div>

      <header className="header">
        <div className="container">
          <div className="header-box">
            <a href="#!" className="header-logo">
              <img src="/image/logo.svg" alt="logo" />
              <span>Abito</span>
            </a>
            <div className="header-controls">
              <button className="btn btn-outline">Вход и регистрация</button>
              <button className="btn btn-primary">Подать объявление</button>
            </div>
            <div className="header-burger">
              <img src="/image/burger.svg" alt="burger menu" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="search">
          <div className="container">
            <div className="search-box">
              <input type="text" />

              <button className="btn btn-primary search-btn">
                <img className="search-btn__icon" src=" /image/search.svg" alt="search" />
                <span className="search-btn__text">Найти</span>
              </button>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="content-box">
              <div className="content-main">
                <h2 className="content-main__title">
                  Рекомендации для вас
                </h2>

                <div className="content-main__list">

                  <a href="product.html" className="content-main__list-item">
                    <div className="content-main__list-item--img">
                      <img src="/image/card-img.jpg" alt="card-img" />
                    </div>

                    <h5 className="content-main__list-item--title">
                      Пвх материал 2й сорт
                    </h5>

                    <strong className="content-main__list-item--price">
                      170 ₽
                    </strong>

                    <div className="content-main__list-item--desc-box">
                      <span className="content-main__list-item--desc">
                        Казань, р-н Вахитовский
                      </span>
                      <span className="content-main__list-item--desc">
                        10 июля 11:39
                      </span>
                    </div>
                  </a>

                </div>
              </div>

              <div className="content-side">
                <h3 className="content-said__title"> Сервисы и услуги </h3>

                <div className="content-said__box">
                  <div className="content-said__list">
                    <div className="content-said__list-item">
                      <img className="content-said__list-item--img" src="/image/side-info-1.svg" alt="" />
                      <h5 className="content-said__list-item--title">
                        Доставка
                      </h5>
                      <div className="content-said__list-item--text">
                        Проверка при получении и возможность бесплатно вернуть товар
                      </div>
                    </div>
                    <div className="content-said__list-item">
                      <img className="content-said__list-item--img" src="/image/side-info-2.svg" alt="" />
                      <h5 className="content-said__list-item--title">
                        Автотека
                      </h5>
                      <div className="content-said__list-item--text">
                        Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                      </div>
                    </div>
                    <div className="content-said__list-item">
                      <img className="content-said__list-item--img" src="/image/side-info-3.svg" alt="" />
                      <h5 className="content-said__list-item--title">
                        Онлайн-бронирование жилья
                      </h5>
                      <div className="content-said__list-item--text">
                        Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России
                      </div>
                    </div>
                  </div>

                  <div className="content-said__footer">
                    <p className="content-said__footer--item">
                      © ООО «Абито», 2011–2021
                    </p>
                    <a href="#!" className="content-said__footer--item">
                      Политика конфиденциальности
                    </a>
                    <a href="#!" className="content-said__footer--item">
                      Обработка данных
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};