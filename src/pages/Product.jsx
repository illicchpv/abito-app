import {useParams} from "react-router-dom";
import {cardArray} from "../constants";

export const Product = () => {
  const {id} = useParams();
  const findProduct = cardArray.find(p => p.id === Number(id));

  return (
    <section className="content">
      <div className="container">
        {findProduct ?
          <div className="content-box">
            <div className="content-product">
              <div className="content-product__left">
                <h2 className="content-product__title"> {findProduct.title} </h2>

                <img className="content-product__img" src={findProduct.img} alt="product-image" />

                <p className="content-product__text">
                  {findProduct.description}<br />
                </p>
              </div>

              <div className="content-product__right">
                <h2 className="content-product__price"> {findProduct.price} </h2>

                <button className="btn btn-primary btn-large">Показать телефон</button>
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
          :
          <h2>Такого товара нет!</h2>
        }
      </div>
    </section>
  );
};