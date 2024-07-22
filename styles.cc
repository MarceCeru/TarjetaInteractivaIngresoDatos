@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
}

.main-container {
  width: 375px;
  margin: auto;
}
.main-container__backgraund-section {
  background-image: url("../images/bg-main-mobile.png");
  background-repeat: no-repeat;
  height: 240px;
  position: relative;
}
.main-container__form-section {
  padding: 90px 24px 45px;
}
@media (min-width: 1440px) {
  .main-container {
    width: 1440px;
    display: flex;
  }
  .main-container__backgraund-section {
    background-image: url("../images/bg-main-desktop.png");
    width: 900px;
    height: 900px;
  }
}

.card {
  width: 288px;
  height: 160px;
  color: hsl(0, 0%, 100%);
  padding: 20px;
  background-image: url("../images/bg-card-front.png");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 126px;
  left: 18px;
  z-index: 1;
  letter-spacing: 2px;
}
@media (min-width: 1440px) {
  .card {
    width: 450px;
    height: 247px;
    padding: 30px;
  }
}
@media (min-width: 1440px) {
  .card {
    top: 187px;
    left: 167px;
  }
}
.card__logo {
  width: 55px;
  margin-bottom: 30px;
}
.card__number {
  margin-bottom: 15px;
}
.card__details {
  display: flex;
  font-size: 0.6em;
  justify-content: space-between;
  text-transform: uppercase;
}
@media (min-width: 1440px) {
  .card__logo {
    width: 86px;
    margin-bottom: 55px;
  }
  .card__number {
    font-size: 1.6em;
    margin-bottom: 25px;
  }
  .card__details {
    font-size: 0.8em;
  }
}

.card-back {
  width: 288px;
  height: 160px;
  color: hsl(0, 0%, 100%);
  padding: 20px;
  background-image: url("../images/bg-card-back.png");
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 30px;
  left: 75px;
  letter-spacing: 2px;
}
@media (min-width: 1440px) {
  .card-back {
    width: 450px;
    height: 247px;
    padding: 30px;
  }
}
@media (min-width: 1440px) {
  .card-back {
    top: 468px;
    left: 257px;
  }
}
.card-back__cvc {
  font-size: 0.7em;
  margin-top: 50px;
  text-align: right;
  padding-right: 10px;
}
@media (min-width: 1440px) {
  .card-back__cvc {
    font-size: 1em;
    margin-top: 80px;
    padding-right: 30px;
  }
}

.form__label {
  text-transform: uppercase;
  font-size: 0.65em;
  letter-spacing: 2px;
  display: block;
  margin-bottom: 8px;
  color: hsl(278, 68%, 11%);
  font-weight: bold;
}
.form__input {
  width: 100%;
  height: 40px;
  margin-bottom: 18px;
  border-radius: 4px;
  font-family: "Space Grotesk", sans-serif;
  border: 1px solid hsl(270, 3%, 87%);
  padding-left: 10px;
  font-size: 1em;
  outline: none;
}
.form__input::placeholder {
  color: hsl(270, 3%, 87%);
}
.form__date-cvc {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 16px;
}
.form__date {
  display: flex;
  gap: 10px;
}
.form__submit, .thanks-section__button {
  background-color: hsl(278, 68%, 11%);
  color: hsl(270, 3%, 87%);
  width: 100%;
  height: 50px;
  border-radius: 8px;
  font-size: 1em;
  letter-spacing: 1px;
  font-family: "Space Grotesk", sans-serif;
}
.form__submit:hover, .thanks-section__button:hover {
  cursor: pointer;
}
@media (min-width: 1440px) {
  .form {
    width: 385px;
    margin-top: 180px;
  }
  .form__input {
    margin-bottom: 40px;
  }
}

.error {
  color: hsl(0, 100%, 66%);
  margin: -10px 0 18px;
  font-size: 0.6em;
}

.form__errors-containers {
  display: flex;
  gap: 5px;
}

.form__errors-containers div {
  width: 100px;
  text-align: center;
}

.thanks-section {
  display: none;
  width: 375px;
  margin: auto;
  margin-bottom: 60px;
}
.thanks-section__img {
  display: block;
  margin: auto;
  margin-bottom: 30px;
}
.thanks-section__tittle {
  text-transform: uppercase;
  text-align: center;
  font-weight: 400;
  letter-spacing: 4px;
  color: hsl(278, 68%, 11%);
  margin-bottom: 24px;
}
.thanks-section__text {
  text-align: center;
  color: hsl(279, 6%, 55%);
  font-size: 1.1em;
  margin-bottom: 24px;
}
@media (min-width: 1440px) {
  .thanks-section {
    margin-top: 180px;
  }
}

.attribution {
  font-size: 11px;
  text-align: center;
}

.attribution a {
  color: hsl(228, 45%, 44%);
}

/*# sourceMappingURL=styles.cc.map */
