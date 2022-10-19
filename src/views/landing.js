import React from 'react'

import { Helmet } from 'react-helmet'

import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="landing-landing">
        <div className="landing-discount">
          <img
            src="/playground_assets/ginger3322-uepk-200h.png"
            alt="ginger3322"
            className="landing-ginger"
          />
          <img
            src="/playground_assets/nootris3296-98mc-200h.png"
            alt="nootris3296"
            className="landing-nootris"
          />
          <img
            src="/playground_assets/vorus3321-4ntb-200h.png"
            alt="vorus3321"
            className="landing-vorus"
          />
          <span className="landing-text">
            <span>
              <span>ПОЛУЧИ ЗАЩИТУ ИММУНИТЕТА</span>
              <br></br>
              <span></span>
            </span>
            <span>СО СКИДКОЙ -15% ПЕРВЫМ!</span>
          </span>
          <span className="landing-text06">
            <span>
              <span>
                Содержит
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
            </span>
            <span>имбирь</span>
          </span>
          <span className="landing-text12">
            <span>
              <span>
                Нейтрализует
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span></span>
            </span>
            <span>вирусы</span>
          </span>
          <span className="landing-text18">+ Бесплатная доставка</span>
          <span className="landing-text19">Специальная цена</span>
          <span className="landing-text20">
            <span>750₽</span>
          </span>
          <span className="landing-text22">690₽</span>
          <img
            src="/playground_assets/rectangle33321-unne-200h.png"
            alt="Rectangle33321"
            className="landing-rectangle3"
          />
          <div className="landing-botton">
            <span className="landing-text23">
              <span>Оформить заказ!</span>
            </span>
          </div>
        </div>
        <div className="landing-main">
          <div className="landing-bg">
            <img
              src="/playground_assets/bg3216-dffg-1500w.png"
              alt="bg3216"
              className="landing-bg1"
            />
            <div className="landing-vector">
              <img
                src="/playground_assets/vector3296-ypi4.svg"
                alt="Vector3296"
                className="landing-vector01"
              />
              <img
                src="/playground_assets/vector3296-pqh.svg"
                alt="Vector3296"
                className="landing-vector02"
              />
              <img
                src="/playground_assets/vector3296-26z.svg"
                alt="Vector3296"
                className="landing-vector03"
              />
              <img
                src="/playground_assets/vector3296-x1ri.svg"
                alt="Vector3296"
                className="landing-vector04"
              />
              <img
                src="/playground_assets/vector3296-edil.svg"
                alt="Vector3296"
                className="landing-vector05"
              />
              <img
                src="/playground_assets/vector3296-9xhv.svg"
                alt="Vector3296"
                className="landing-vector06"
              />
              <img
                src="/playground_assets/vector3296-fc5b.svg"
                alt="Vector3296"
                className="landing-vector07"
              />
              <img
                src="/playground_assets/vector3296-k7vd.svg"
                alt="Vector3296"
                className="landing-vector08"
              />
            </div>
          </div>
          <div className="landing-hader">
            <img
              src="/playground_assets/bg3780-ii0d-200h.png"
              alt="bg3780"
              className="landing-bg2"
            />
            <div className="landing-mask-group">
              <img
                src="/playground_assets/ginger3251-41nd-500h.png"
                alt="ginger3251"
                className="landing-ginger1"
              />
              <img
                src="/playground_assets/nootris3250-i0h6-300w.png"
                alt="nootris3250"
                className="landing-nootris1"
              />
              <img
                src="/playground_assets/lemon3260-x1equo-600w.png"
                alt="Lemon3260"
                className="landing-lemon"
              />
            </div>
            <span className="landing-text25">FAQ</span>
            <span className="landing-text26">Оплата и доставка</span>
            <span className="landing-text27">Возврат</span>
            <span className="landing-text28">Исследования</span>
            <span className="landing-text29">Личный кабинет</span>
            <span className="landing-text30">8 8 (800) 600-09-90</span>
            <div className="landing-logo">
              <img
                src="/playground_assets/vector3255-4n86.svg"
                alt="Vector3255"
                className="landing-vector09"
              />
            </div>
            <div className="landing-basket">
              <img
                src="/playground_assets/basket13788-smo.svg"
                alt="basket13788"
                className="landing-basket1"
              />
              <div className="landing-group40">
                <img
                  src="/playground_assets/ellipse33781-y0i-200h.png"
                  alt="Ellipse33781"
                  className="landing-ellipse3"
                />
                <span className="landing-text31">1</span>
              </div>
            </div>
          </div>
          <span className="landing-text32">
            <span>
              АКТИВИРУЙ
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>ИММУНИТЕТ!</span>
          </span>
          <span className="landing-text36">
            <span>
              <span>
                Всего пять секунд в день помогут укрепить иммунитет
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>и повысить защитные силы организма</span>
            </span>
          </span>
          <span className="landing-text41">
            <span>NOOTRIS ПОМОГАЕТ</span>
          </span>
          <span className="landing-text43">
            <span>
              <span>
                Вашему организму во время пандемии
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>и сезонных простуд</span>
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Landing
