<template>

  <div dir="rtl">
    <div class="header">
      <button type="button">ورود / عضویت</button>
      <i class="fa fa-save fa-lg" aria-hidden="true"></i>
    </div>
    <div class="navbar">
        <ul>
            <li>
                <a class="active" href="#">آخرین‌ها</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">فیلم</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">سریال</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">انیمیشن</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">مستند</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">مستند</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">مجموعه‌ها</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">انیمه</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">دوبله</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">زیگزاگ</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">باک آفیس</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">انونس</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
            <li>
                <a href="#">برترین‌ها</a>
                &nbsp;
                <i class="fa fa-angle-down" aria-hidden="true"></i>
            </li>
        </ul>
    </div>
    <nuxt/>
     <div class="below-carousel">
        <ul>
            <li>
                <a class="active" href="#">درخواست فیلم</a>
                &nbsp; | &nbsp;
            </li>
            <li>
                <a class="active" href="#">اشتراک ویژه</a>
                &nbsp; | &nbsp;
            </li>
            <li>
                <a class="active" href="#">باکس آفیس</a>
                &nbsp; | &nbsp;
            </li>
            <li>
                <a class="active" href="#">نرم افزار موردنیاز</a>
                &nbsp; | &nbsp;
            </li>
            <li>
                <a class="active" href="#">پرسش‌های متداول</a>
                &nbsp; | &nbsp;
            </li>
            <li>
                <a class="active" href="#home">درباره ما</a>
                &nbsp; | &nbsp;
            </li>
            <li>
                <a class="active" href="#home">تماس با ما</a>
            </li>
        </ul>
    </div>

    <div>
        <div>
            <p class="right-box">
                محتوای این سایت مطابق با فرهنگ خانواده‌های ایرانی می‌باشد.
            </p>
            <p class="left-box">
                مجموعه‌ی دیتابیس فیلم امیرکبیر، با هدف ایجاد یک تجربه مشترک آموزشی و تفریحی برای دانشجویان دانشگاه صنعتی امیرکبیر ایجاد شده
                و هیچ‌گونه استفاده تجاری ندارد. در صورتی که از این سایت و امکانات آن بهره می‌برید آن را به دوستان خود معرفی
                کنید.
            </p>

        </div>
        <div class="icons">
            <i class="fa fa-instagram fa-4x" aria-hidden="true"></i>
            <i class="fa fa-google-plus fa-4x" aria-hidden="true"></i>
            <i class="fa fa-telegram fa-4x" aria-hidden="true"></i>
            <i class="fa fa-twitter fa-4x" aria-hidden="true"></i>
        </div>
    </div>

    <div class="footer">
        <p>
            تمامی حقوق این وبسایت متعلق به دیتابیس فیلم امیرکبیر می‌باشد.
        </p>
    </div>
  </div>
</template>

<style>
.below-carousel ul {
    list-style-type: none;
    margin-right: 23%;
    padding: 0;
    text-align: center;
    overflow: hidden;
}

.below-carousel li a {
    text-decoration: none;
    color: #808080;
}

.below-carousel li {
    float: right;
    display: block;
    color: #808080;
    text-align: center;
    text-decoration: none;
    margin-right: 2px;
}

.below-carousel li a:hover {
    background-color: #111;
}

.right-box {
    margin-left: 50px;
    font-size: 20px;
    width: 300px;
    text-align: center;
    border: solid 2px #4c4c4c;
    padding: 30px;
    float: right;
    border-radius: 5px;
    margin-right: 70px;
    margin-top: 0px;
}

.left-box {
    font-size: 23px;
    color: #8e8e8e;
    margin-top: 55px;
    margin-left: 150px;
}


.icons {
    overflow: hidden;
    margin-right: 90px;
    padding-top: 10px;
    clear: both;
}

.icons i {
    margin-right: 5px;
}

</style>
