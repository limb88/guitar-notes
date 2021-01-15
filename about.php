<!DOCTYPE html>
<html>
	<head>

        <?php
            require_once("parts/page-links.php"); 
        ?>


        <title>GuitarNotes</title>

	</head>
    <body>
    
        <?php 
            require_once("parts/about-header.php"); 
        ?>
        <h1 class="page-header">Как тренироваться</h1>

        <div class="about-stroke full-width">
            <div class="about-left about-small">
                <h2 class="about-number">1</h2>
                <h2 class="page-header">Занимайтесь с&nbsp;гитарой</h2>
                <p>
                    Тренажер рассчитан, чтобы вы&nbsp;занимались 
                    с&nbsp;гитарой в&nbsp;руках. У&nbsp;вас должны вырабатываться
                    тактильные навыки. Увидели ноту&nbsp;&mdash; руки сразу
                    тянутся к&nbsp;ладу и&nbsp;струне.
                </p>
            </div>
            <div class="about-left about-big step-left">
                <img src="/img/about/guitar.png"/>
            </div>
        </div>

        <div class="about-stroke full-width">
            <div class="about-right about-small step-right">
                <h2 class="about-number">2</h2>
                <h2 class="page-header">Выберите урок</h2>
                <p>
                    Выберите занятие, которое вы&nbsp;хотите тренировать.
                    Вы&nbsp;можете учить обычные ноты, либо еще ноты диез и&nbsp;бемоль.
                </p>
            </div>
            <div class="about-right about-big">
                <img src="/img/about/lesson.png"/>
            </div>
        </div>

        <div class="about-stroke full-width">
            <div class="about-left about-small">
                <h2 class="about-number">3</h2>
                <h2 class="page-header">Тренируйтесь</h2>
                <p>
                    Нажмите на&nbsp;кнопку &laquo;Начать&raquo;. Программа покажет вам ноту. 
                    Пока идет обратный отчет, вам надо сиграть ее&nbsp;на&nbsp;гитаре.
                    Когда таймер завершится, вы&nbsp;увидете ответ и&nbsp;положение ноты на&nbsp;грифе. Также вы&nbsp;услышите эту ноту. Таким образом вы&nbsp;можете проверить себя визуально или на&nbsp;слух&nbsp;&mdash; как вам будет удобнее. 
                </p>
            </div>
            <div class="about-left about-big step-left">
                <img src="/img/about/process.png"/>
            </div>
        </div>

        <div class="about-stroke full-width">
            <div class="about-right about-small step-right">
                <h2 class="about-number">4</h2>
                <h2 class="page-header">Ничего нажимать не&nbsp;придется</h2>
                <p>
                    Программа сама будет переходить к&nbsp;следующему вопросу (в&nbsp;зависимости от&nbsp;настроек). Так что, ничего нажимать не&nbsp;придется. Вы&nbsp;всегда можете остановить этот процесс, нажав на&nbsp;кнопку паузы.
                </p>
            </div>
            <div class="about-right about-big">
                <img src="/img/about/next.png"/>
            </div>
        </div>

        <div class="about-stroke full-width">
            <div class="about-left about-small">
                <h2 class="about-number">5</h2>
                <h2 class="page-header">Настройки</h2>
                <p>
                    Вы&nbsp;можете настроить тренажер под себя. Задайте свое время для ответа или перехода к&nbsp;следующему вопросу. Настройте громкость<sup>*</sup> проигрывания нот или вообще отключите эту опцию.
                </p>
                <p class="about-note">
                    <sup>*</sup>В&nbsp;мобильной версии Safari отсутствует возможность программно менять громкость. Вы&nbsp;можете использовать кнопки громкости на&nbsp;самом устройстве.
                </p>
            </div>
            <div class="about-left about-big step-left">
                <img src="/img/about/preferences.png"/>
            </div>
        </div>

        <div class="about-stroke full-width last-stroke">
            <div class="about-right about-small step-right">
                <h2 class="about-number">6</h2>
                <h2 class="page-header">Доступно для <span class="small-letters">i</span>OS</h2>
                <p>
                    Помимо десктопных браузеров (рекомендуется Google&nbsp;Chrome), поддерживается мобильная версия Safari. В&nbsp;дальнейшем возможна поддержка Android и&nbsp;Windows&nbsp;Phone.
                </p>
            </div>
            <div class="about-right about-big">
                <img src="/img/about/devices.png"/>
            </div>
        </div>
        
        <?php 
            require_once("parts/index-footer.php"); 
        ?>
        <?php 
            require_once("parts/counters.php"); 
        ?>

    </body>
</html>