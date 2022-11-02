import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    // catalogList: [
    //     {
    //         id: 1,
    //         category: 1,
    //         name: 'Топ',
    //         price: 1000,
    //         sizes: [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}, {id: 4, name: 'L'}],
    //         img: 'https://images.asos-media.com/products/krop-top-s-perekrestnymi-bretelyami-asos-design/13273762-1-stone?$n_960w$&wid=952&fit=constrain'
    //     },
    //     {
    //         id: 2,
    //         category: 1,
    //         name: 'Кофта',
    //         price: 2500,
    //         sizes: [{id: 1, name: 'XS'}, {id: 3, name: 'M'}, {id: 4, name: 'L'}],
    //         img: 'https://images.asos-media.com/products/ukorochennyj-svitshot-s-logotipom-asos-4505/13122102-1-grey?$XXL$'
    //     },
    //     {
    //         id: 3,
    //         category: 1,
    //         name: 'Юбка',
    //         price: 1800,
    //         sizes: [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}],
    //         img: 'https://images.asos-media.com/products/mini-yubka-asos-design/12560666-1-nude?$XXL$'
    //     },
    //     {
    //         id: 4,
    //         category: 2,
    //         name: 'Кросовки',
    //         price: 3900,
    //         sizes: [{id: 1, name: '37'}, {id: 2, name: '38'}],
    //         img: 'https://images.asos-media.com/products/svetlo-bezhevye-krossovki-na-massivnoj-podoshve-asos-design/22883181-1-stone?$XXL$'
    //     },
    //     {
    //         id: 6,
    //         category: 3,
    //         name: 'Часы Ролексы',
    //         price: 9900,
    //         sizes: [],
    //         img: 'https://images.asos-media.com/products/chasy-asos-design/23830768-1-gold?$n_640w$&wid=513&fit=constrain'
    //     },
    //     {
    //         id: 7,
    //         category: 1,
    //         name: 'Шорты',
    //         price: 890,
    //         sizes: [{id: 3, name: 'M'}, {id: 4, name: 'L'}],
    //         img: 'https://images.asos-media.com/products/trikotazhnye-shorty-asos-4505/23749556-1-electricblue?$n_960w$&wid=952&fit=constrain'
    //     },
    //     {
    //         id: 8,
    //         category: 3,
    //         name: 'Браслет',
    //         price: 1500,
    //         sizes: [],
    //         img: 'https://images.asos-media.com/products/serebristyj-braslet-tsepochka-so-strazami-asos-design/200903100-1-silver?$n_1280w$&wid=1125&fit=constrain'
    //     },
    //     {
    //         id: 9,
    //         category: 3,
    //         name: 'Шляпа',
    //         price: 4200,
    //         sizes: [],
    //         img: 'https://images.asos-media.com/products/chernaya-strukturirovannaya-shlyapa-fedora-reguliruemogo-razmera-asos-design/22458018-1-black?$n_1920w$&wid=1926&fit=constrain'
    //     },
    //     {
    //         id: 10,
    //         category: 4,
    //         name: 'Помада',
    //         price: 780,
    //         sizes: [],
    //         img: 'https://images.asos-media.com/products/matovaya-gubnaya-pomada-asos-design-makeup-doubtless/8026776-1-doubtless?$XXL$&wid=513&fit=constrain'
    //     },
    // ],
    catalogList: [
        {
            id: 1,
            category: 1,
            name: 'Свитер вязаный с косами (фуксия)',
            description: 'Вязаный свитер с длинным рукавом из невесомой и теплой пряжи с декоративным трендовым узором косами. Изделие имеет отложной воротник и V-вырез. Модель дополнит базовый гардероб и подойдет как к брюкам, так и к джинсам.',
            article: 10002915,
            price: 6990,
            sizes: [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}, {id: 4, name: 'L'}],
            img: 'https://static.insales-cdn.com/images/products/1/928/612107168/Свитер_вязаный_с_косами__фуксия__001.jpg'
        },
        {
            id: 2,
            category: 1,
            name: 'Футболка вязаная из вискозы',
            description: 'Вязаная футболка с круглой горловиной и коротким рукавом из премиальной итальянской вискозной пряжи. Приятный и прилегающий к телу материал, который не теряет форму и не скатывается. Трикотаж устойчив к многочисленным стиркам и произведен на сертифицированной фабрике.',
            article: 10002815,
            price: 4990 ,
            sizes: [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}, {id: 4, name: 'L'}],
            img: 'https://static.insales-cdn.com/images/products/1/3937/601452385/Футболка_вязаная_из_вискозы__молочный__002.jpg'
        },
        {
            id: 3,
            category: 1,
            name: 'Кофточка с асимметричными вырезами (голубой)',
            description: 'Кофточка с ассиметричными вырезами в голубом оттенке. Аккуратно подчеркнутая линия декольте, длинный рукав, приятная к телу ткань. Сочетайте кофточку с джинсами или с юбкой более базового цвета.',
            article: 10002808,
            price: 4280,
            sizes: [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}],
            img: 'https://static.insales-cdn.com/images/products/1/2940/603827068/Кофточка_с_асимметричными_вырезами__голубой__002.jpg'
        },
        {
            id: 4,
            category: 1,
            name: 'Брюки прямые с декоративным поясом (фуксия)',
            description: 'Брюки прямые с декоративным поясом. Модель дополнена золотистыми пуговицами. Высокая посадка для самых удобных образов. Сочетайте с жакетом из твида в тон брюк.',
            article: 10002803,
            price: 6490 ,
            sizes:  [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}, {id: 4, name: 'L'}],
            img: 'https://static.insales-cdn.com/images/products/1/6547/595442067/130922Charmstore9731.jpg'
        },
        {
            id: 5,
            category: 1,
            name: 'Платье миди с длинным рукавом из крепа (серо-голубой)',
            description: 'Платье миди в серо-голубом цвете. Длинный рукав и аккуратный вырез. Подойдёт как для вечерних и торжественных мероприятий, так и для повседневных образов. ',
            article: 10002745,
            price: 7590,
            sizes:  [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}, {id: 4, name: 'L'}],
            img: 'https://static.insales-cdn.com/images/products/1/2280/601483496/Платье_миди_с_длинным_рукавом_из_крепа__серо-голубой__004.jpg'
        },
        {
            id: 6,
            category: 1,
            name: 'Поло из кашемира с длинным рукавом (апельсиновый)',
            description: 'Поло из теплой и невесомой пряжи. Модель разработана с длинным рукавом, отложным воротником и V-вырезом. Тонкая и гладкая шерсть мериноса совсем не колется, а невесомый кашемир придает нити пушистость.',
            article: 10002773,
            price: 8990,
            sizes: [{id: 3, name: 'M'}, {id: 4, name: 'L'}],
            img: 'https://static.insales-cdn.com/images/products/1/4052/600993748/Поло_из_кашемира_с_длинным_рукавом__апельсиновый__005.jpg'
        },
        {
            id: 7,
            category: 1,
            name: 'Кофточка с квадратным вырезом и пышным рукавом (белый)',
            description: 'Новый фасон кофточек с квадратном вырезом. Очень приятная к телу вискоза в рубчик. Пышный рукав. Рекомендуем сочетать с классическими брюками и юбками для создания женственного, классического образа или с джинсами для более повседневного.',
            article: 10002934,
            price: 1950,
            sizes: [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}, {id: 4, name: 'L'}],
            img: 'https://static.insales-cdn.com/images/products/1/2564/358590980/IMG_2108.JPG'
        },
        {
            id: 8,
            category: 1,
            name: 'Кардиган Logomania (травяной)',
            description: 'Кардиган оверсайз с длинным рукавом на пуговицах. Спереди и сзади изделия представлен оригинальный орнамент, который разработан эксклюзивно для этой коллекции. В основу этого орнамента вошло название нашего бренда Charmstore. Исходя из последних трендов, мы разработали новое начертание нашего логотипа и превратили его в стильный и яркий принт, который будет заметен издалека.',
            article: 10002933,
            price: 10990,
            sizes: [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}, {id: 4, name: 'L'}],
            img: 'https://static.insales-cdn.com/images/products/1/5527/609392023/07.10.charmblogger1156.jpg'
        },
        {
            id: 9,
            category: 1,
            name: 'Кардиган Logomania (фуксия)',
            description: 'Кардиган оверсайз с длинным рукавом на пуговицах. Спереди и сзади изделия представлен оригинальный орнамент, который разработан эксклюзивно для этой коллекции. В основу этого орнамента вошло название нашего бренда Charmstore. Исходя из последних трендов, мы разработали новое начертание нашего логотипа и превратили его в стильный и яркий принт, который будет заметен издалека.',
            article: 10002932,
            price: 10990,
            sizes:  [{id: 1, name: 'XS'}, {id: 2, name: 'S'}, {id: 3, name: 'M'}, {id: 4, name: 'L'}],
            img: 'https://static.insales-cdn.com/images/products/1/1040/610649104/Кардиган_Logomania__фуксия__004.jpg'
        },
        {
            id: 10,
            category: 2,
            name: 'Женские зимние сапоги EKONIKA',
            description: 'Зимние сапоги на устойчивом каблуке — пара, с которой даже в холодное время года можно составить множество романтичных образов. В этой модели дизайнеры гармонично соединили женственный приталенный силуэт и брутальную подошву. Для создания пары использовали натуральную гладкую кожу черного цвета с деликатным блеском, которая комфортно облегает ногу.',
            article: 10002812,
            price: 24990,
            sizes: [{id: 1, name: '35'}, {id: 2, name: '36'}, {id: 3, name: '37'}, {id: 4, name: '38'}, {id: 5, name: '39'}, {id: 6, name: '40'}, {id: 7, name: '41'}],
            img: 'https://cdn.ekonika.ru/upload/iblock/520/EN06196CN_27_black_22Z_2.jpg'
        },
        {
            id: 11,
            category: 2,
            name: 'Дутсы Яндекс Маркет х EKONIKA',
            description: 'В капсульной коллекции Яндекс Маркет х EKONIKA представлен новый формат обуви для города — дутсы (от привычного русского «дутики» и английского «boots»). Модель молочного оттенка с деталями фиолетового цвета вдохновит на создание ярких образов и поможет стать главным героем модных хроник стритстайла. В обуви сочетаются тренд на oversize, многофункциональность и экологичность: материал верха, мягкий наполнитель и теплая стелька каждой пары сделаны из полиэстера, переработанного из пластиковых бутылок, а подошва на 84% состоит из переработанной резины.',
            article: 10002813,
            price: 24990,
            sizes: [{id: 1, name: '35'}, {id: 2, name: '36'}, {id: 3, name: '37'}, {id: 4, name: '38'}, {id: 5, name: '39'}, {id: 6, name: '40'}, {id: 7, name: '41'}],
            img: 'https://cdn.ekonika.ru/upload/iblock/b24/66haomwm3buj7pamy47uyl8t1hbhbr3g/YN00151CN_22_fog_violet_22Z_4.jpg'
        },
        {
            id: 12,
            category: 2,
            name: 'Женские демисезонные ботфорты EKONIKA X USHATAVA',
            description: 'Ботфорты-трансформеры, из капсульной коллекции обуви и аксессуаров Ekonika x USHATÁVA, которые в одно движение руки превращаются в ботильоны с широким голенищем. Модель выполнена из эластичной экокожи и натуральной кожаной подкладки в нижней части.',
            article: 10002811,
            price: 20993,
            sizes: [{id: 1, name: '35'}, {id: 2, name: '36'}, {id: 3, name: '37'}, {id: 4, name: '38'}, {id: 5, name: '39'}, {id: 6, name: '40'}, {id: 7, name: '41'}],
            img: ''
        },
        {
            id: 13,
            category: 2,
            name: 'Женские зимние ботфорты EKONIKA PREMIUM',
            description: 'Ботфорты-стрейч EKONIKA PREMIUM выполнены на колодке, которая пять сезонов подряд становилась бестселлером продаж. Модель выполнена из эластичной искусственной кожи и натуральной кожи в нижней части. Для удобства дизайнеры также добавили функциональную молнию на внутренней стороне изделия. Нескользящая подошва "под манку" и устойчивый каблук, обтянутый кожей в тон материала верха, позволят вам уверенно себя чувствовать на скользкой поверхности.',
            article: 10002946,
            price: 25990,
            sizes: [{id: 1, name: '35'}, {id: 2, name: '36'}, {id: 3, name: '37'}, {id: 4, name: '38'}, {id: 5, name: '39'}, {id: 6, name: '40'}, {id: 7, name: '41'}],
            img: 'https://cdn.ekonika.ru/upload/iblock/5a6/PM00742CN_20_black_22Z_2.jpg'
        },
        {
            id: 14,
            category: 2,
            name: 'Женские демисезонные челси EKONIKA PREMIUM',
            description: 'Полусапоги EKONIKA PREMIUM дизайнеры украсили фигурным рантом красного оттенка — контрастный акцент привлекает внимание и добавляет модели трендовости. Изделие из натуральной гладкой кожи с деликатным блеском в этом сезоне утеплили шерстяной подкладкой и поставили на нескользящую утолщенную подошву. Для удобства на внутренней стороне пары расположена функциональная молния. ',
            article: 10002945,
            price: 21990,
            sizes: [{id: 1, name: '35'}, {id: 2, name: '36'}, {id: 3, name: '37'}, {id: 4, name: '38'}, {id: 5, name: '39'}, {id: 6, name: '40'}, {id: 7, name: '41'}],
            img: 'https://cdn.ekonika.ru/upload/iblock/f52/PM00141CN_20_black_22Z_2.jpg'
        },
        {
            id: 15,
            category: 2,
            name: 'Женские демисезонные сапоги EKONIKA PREMIUM',
            description: 'Ботильоны-трубы EKONIKA PREMIUM стали бестселлерами в прошлом сезоне. Модель с выверенной колодкой и сверхсовренными внутренними компонентами, которые обеспечивают комфорт и надежную фиксацию ног при ходьбе, для новой коллекции дизайнеры выполнили из натурального велюра бежевого оттенка и украсили принтом под зебру. Актуальный узор стал одним из лейтмотивов коллекции Colors of nature, поэтому вы можете дополнить образ аксессуарами с таким же узором. ',
            article: 10002946,
            price: 25990,
            sizes: [{id: 1, name: '35'}, {id: 2, name: '36'}, {id: 3, name: '37'}, {id: 4, name: '38'}, {id: 5, name: '39'}, {id: 6, name: '40'}, {id: 7, name: '41'}],
            img: 'https://cdn.ekonika.ru/upload/iblock/be4/PM01801CN_25_zebra_22Z_2.jpg'
        },
        {
            id: 16,
            category: 2,
            name: 'Женские демисезонные сапоги EKONIKA PREMIUM',
            description: 'Сапоги-трубы EKONIKA PREMIUM, уже успешно зарекомендовавшие себя в прошлом сезоне, дизайнеры также включили в новую коллекцию. На этот раз модель выполнена в том же элегантном стиле без лишних деталей и привлекает внимание скругленным каблуком, обтянутым материалом верха, и фигурным рантом. Пара из натуральной кожи с деликатным блеском утеплена мягкой шерстяной подкладкой в нижней части.',
            article: 10002943,
            price: 30990,
            sizes: [{id: 1, name: '35'}, {id: 2, name: '36'}, {id: 3, name: '37'}, {id: 4, name: '38'}, {id: 5, name: '39'}, {id: 6, name: '40'}, {id: 7, name: '41'}],
            img: 'https://cdn.ekonika.ru/upload/iblock/7af/PM09081CN_27_black_22Z_2.jpg'
        },
        {
            id: 17,
            category: 2,
            name: 'Женские демисезонные лоферы EKONIKA PREMIUM',
            description: 'Демисезонные лоферы EKONIKA PREMIUM привлекают внимание трендовой рельефной подошвой, переходящей в широкий каблук, и золотой цепью на овальной вставке. Модель из гладкой натуральной кожи только выглядит массивной: облегченная резина с нескользящими свойствами позволяет комфортно носить эту пару в течение всего дня. Стилисты рекомендуют сочетать лоферы не только с брюками, но и в трендовом комплекте с юбками и носками или контурными колготками.',
            article: 10002941,
            price: 16990,
            sizes: [{id: 1, name: '35'}, {id: 2, name: '36'}, {id: 3, name: '37'}, {id: 4, name: '38'}, {id: 5, name: '39'}, {id: 6, name: '40'}, {id: 7, name: '41'}],
            img: 'https://cdn.ekonika.ru/upload/iblock/b70/PM00027CN_02_black_22Z_2.jpg'
        },
        {
            id: 18,
            category: 2,
            name: 'Женские демисезонные ботильоны EKONIKA PREMIUM',
            description: 'Челси EKONIKA PREMIUM на утолщенной подошве и устойчивом каблуке — модель, без которой не обойдется в этом сезоне не одна модница. Пара с выверенной колодкой, нескользящей подошвой и мягкой шерстяной подкладкой поможет создать стильные образы во время прохладного сезона. Акцентные детали: монограмма бренда золотого оттенка на петле, фигурный рант, эластичные вставки, которые с внутренней стороны дизайнеры сделали в контрастном красном оттенке. Носите челси с юбками и платьями любой длины, лосинами и укороченными брюками.',
            article: 10002759,
            price: 21990,
            sizes: [{id: 1, name: '35'}, {id: 2, name: '36'}, {id: 3, name: '37'}, {id: 4, name: '38'}, {id: 5, name: '39'}, {id: 6, name: '40'}, {id: 7, name: '41'}],
            img: 'https://cdn.ekonika.ru/upload/iblock/dcb/PM00093CN_22_black_22Z_2.jpg'
        },
        {
            id: 19,
            category: 3,
            name: 'Косынка из шитья (белый)',
            description: 'Легкая летняя косынка из шитья в белом оттенке. Идеальный вариант на лето, можно сочетать с костюмом, чтобы получить полноценный образ или же добавить косынку к платью.',
            article: 10002533,
            price: 600,
            sizes: [],
            img: 'https://static.insales-cdn.com/images/products/1/2192/557623440/шармстор300188.jpg'
        },
        {
            id: 20,
            category: 3,
            name: 'Косынка из шитья (травяной)',
            description: 'Легкая летняя косынка из шитья в травяном оттенке. Идеальный вариант на лето, можно сочетать с костюмом, чтобы получить полноценный образ или же добавить косынку к платью.',
            article: 10002532,
            price: 600,
            sizes: [],
            img: 'https://static.insales-cdn.com/images/products/1/2203/557623451/шармстор300099_1.jpg'
        },
        {
            id: 21,
            category: 3,
            name: 'Сумка вязаная (молочный)',
            description: '🤍LIMITED EDITION🤍 Наш лимитированный шоппер выполнен в актуальном стиле сетчатой сумки. Представлен в молочном цвете, с яркой нашивкой в цвете фуксия. ',
            article: 10002596,
            price: 3790,
            sizes: [],
            img: 'https://static.insales-cdn.com/images/products/1/1074/596517938/Сумка_вязаная__молочный_.jpg'
        },
        {
            id: 22,
            category: 3,
            name: 'Женские варежки',
            description: 'Пушистые варежки из искусственного черного меха — красивый способ согреться в холодную зиму. Пара не только эффектно выглядит, но и очень приятная на ощупь. Такой аксессуар станет стильным дополнением к образам с пуховиками и объемными шарфами.',
            article: 10002597,
            price: 2990,
            sizes: [],
            img: 'https://cdn.ekonika.ru/upload/iblock/0bb/EN33015_black_22Z_1.jpg'
        },
        {
            id: 23,
            category: 3,
            name: 'Женский шарф (розовый)',
            description: 'Широкий шарф в серо-розовую клетку - модный аксессуар, который создаст ощущение тепла и уюта. Модель с длинной бахромой выполнена из полиэстера. Стилисты рекомендуют носить аксессуар поверх однотонных пуховиков, пальто и свитеров.',
            article: 10002598,
            price: 3990,
            sizes: [],
            img: 'https://cdn.ekonika.ru/upload/iblock/ff6/EN44203_pink_grey_22Z_dop.jpg'
        },
        {
            id: 24,
            category: 3,
            name: 'Женские очки (желтый)',
            description: 'Стильные очки трендовой треугольной формы в пластиковой желтой оправе. Линзы желтого цвета и узкие дужки завершают изделие. Модный аксессуар станет эффектным элементом гардероба современной модницы.',
            article: 10002599,
            price: 3490,
            sizes: [],
            img: 'https://cdn.ekonika.ru/upload/iblock/31e/EN48546_yellow_22L_2.jpg'
        },
        {
            id: 25,
            category: 3,
            name: 'Женский браслет',
            description: 'Набор аксессуаров EKONIKA выполнен из гипоаллергенного металла серебрянного оттенка. Аксессуары украшены прозрачными кристаллами розового и фиолетового оттенков в огранке «подушка». Можно носить как отдельные браслеты или сочетать два аксессуара между собой.',
            article: 10002530,
            price: 1490,
            sizes: [],
            img: 'https://cdn.ekonika.ru/upload/iblock/250/EN40739_lavanda_lt.pink_22L_1.jpg'
        },
        {
            id: 26,
            category: 3,
            name: 'Кольцо Avanti с фианитом',
            description: 'Кольцо с редким фианитом огранки « ice» изготовлено из серебра 925 пробы и украшено дорожкой из фианитов',
            article: 10002531,
            price: 5200,
            sizes: [{id: 1, name: '16'}, {id: 2, name: '17'}, {id: 3, name: '17,5'}, {id: 4, name: '18'}],
            img: 'https://nectar-jewelry.ru/wp-content/uploads/2021/10/IMG_0741-1536x2048.jpg'
        },
        {
            id: 27,
            category: 3,
            name: 'Браслет The best Thing in our life is love',
            description: 'Лаконичный золотой браслет с надписью: «The best thing in our life is love»',
            article: 10002595,
            price: 3500,
            sizes: [{id: 1, name: '14'}, {id: 2, name: '15'}, {id: 3, name: '16'}, {id: 4, name: '17'}],
            img: 'https://nectar-jewelry.ru/wp-content/uploads/2021/08/53F395CB-ABED-45E8-8-1536x2048.jpeg'
        },
        {
            id: 28,
            category: 4,
            name: 'MAC strip down matte lipstick',
            description: 'Мы собрали самую богатую палитру нюдовых оттенков губных помад, карандашей и блесков для губ для любого тона кожи и создания любого настроения. M A C - для клиентов любых возрастов, национальностей и пола.',
            article: 10002630,
            price: 2190,
            sizes: [],
            img: 'https://goldapple.ru/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/7/7/773602544172_1_nbdhtnhzlwficiyx.jpg'
        },
        {
            id: 29,
            category: 4,
            name: 'LANCÔME hypnose waterproof',
            description: 'Тушь Hypnose Waterproof хорошо наслаивается, поэтому можно самостоятельно выбрать желаемый объем ресниц. За сохранение макияжа при любой погоде на протяжении 12 часов отвечает водостойкая формула. В состав средства входит ряд растительных компонентов, ухаживающих за ресницами. Масло жожоба и гуммиарабик сохраняют их мягкость и гладкость, карнаубский воск фиксирует изгиб, а провитамин В5 разглаживает текстуру. Запатентованная щеточка туши разделяет ресницы и помогает равномерно нанести продукт.',
            article: 10002633,
            price: 2430,
            sizes: [],
            img: 'https://goldapple.ru/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/5/c/5cde8c424e0bdff1e68c0753a5c2fa5f.jpg'
        },
        {
            id: 30,
            category: 4,
            name: 'LUMENE blur longwear powder foundation',
            description: 'Формула 2 в 1, сочетающая тональный крем и пудру, мгновенно делает тон кожи более ровным и гладким. Используйте как самостоятельно, так и поверх тональной основы для идеального макияжа в течение дня. Формула обогащена арктической морошкой и инкапсулрованной гиалуроновой кислотой в сочетании с минеральными SPF-фильтрами для мягкости и комфорта кожи. Пудра представлена в 4 оттенках. 100% веганский продукт. Обновленная упаковка полностью подлежит переработке или вторичному использованию.',
            article: 10002634,
            price: 1780,
            sizes: [],
            img: 'https://goldapple.ru/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/6/4/6412600832815_1_za9rkhv35xkrovl2.jpg'
        },
        {
            id: 31,
            category: 4,
            name: '3INA the eyeshadow palette',
            description: 'Палитра теней Mina The Eyeshadow Palette – это высокое качество и потрясающий макияж век с огромными возможностями. С The Eyeshadow Palette вы легко можете экспериментировать с созданием любого, желаемого вами, образа, при этом, создавая как стильный и креативный макияж, так и классический. Очень гармонично подобранные оттенки с бархатистой и мерцающей текстурной формулой, легко можно применить как по отдельности, так и в различных комбинационных решениях.',
            article: 10002635,
            price: 1600,
            sizes: [],
            img: 'https://goldapple.ru/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/e/f/efb3c6448f70974419097cd9106f3732.jpg'
        },
        {
            id: 32,
            category: 4,
            name: 'CHARME 9 in 1',
            description: 'Девять высокопигментированных стойких оттенков теней с сияющим финишем, включая темный для контуринга глаза, а также тени - хайлайтер для расстановки световых акцентов. Атласная текстура и идеально подобранные оттенки помогут в создании гармоничного образа.',
            article: 10002636,
            price: 499,
            sizes: [],
            img: 'https://goldapple.ru/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/4/6/4620036271074_1_gxgk07pgvtsgyt1l.jpg'
        },
        {
            id: 33,
            category: 4,
            name: 'NYX PROFESSIONAL MAKEUP gimme super stars',
            description: 'Основной элемент косметички каждой Super Star. Наш культовый и самый продаваемый спрей для закрепления макияжа теперь в звездной упаковке! Благодаря матовому покрытию, этот спрей для фиксации подойдет к любому макияжу.',
            article: 10002637,
            price: 979,
            sizes: [],
            img: 'https://goldapple.ru/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/8/0/800897215101_1_aypsfxup6cuctv21.jpg'
        },
        {
            id: 34,
            category: 4,
            name: 'YVES SAINT LAURENT rouge pur couture',
            description: 'Помада всегда была культовым знаком женской красоты. Для YSL такой момент наступил, когда в 1978 году Ив Сен-Лоран выпустил первую помаду с оттенками от кутюр. Именно тогда было положено начало, вознёсшее яркие цвета помады на пьедестал славы. Помада Rouge Pur Couture начала своё шествие по планете, даря губам каждой своей обладательницы насыщенный, роскошный оттенок. Rouge Pur Couture стала абсолютным оружием сильной женщины. ',
            article: 10002638,
            price: 2529,
            sizes: [],
            img: 'https://goldapple.ru/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/3/6/3614273325844_1.png_pc4zjbjbemliyjgb.jpg'
        },
        {
            id: 35,
            category: 4,
            name: 'QUERIDOS GLITTERS eragon',
            description: 'Блёстки для лица и тела на гелевой основе. Безопасный состав для кожи - гель Алоэ Вера. Нанесение в одно движение. Смывается легко водой. Сияй ярче звёзд вместе с глиттерами от Queridos Glitters! Подарочный набор 2в1 QUERIDOS GLITTERS. Большой объём 10 мл цвета «Эрагон» позволит наслаждаться данным оттенком долго. Дополнительно входит гель-заправка, в случае высыхания глиттера в баночке.Состав: Глиттер 10 мл «Эрагон» и гель-заправка 6 мл.',
            article: 10002639,
            price: 500,
            sizes: [],
            img: 'https://goldapple.ru/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/2/0/2011881270664_1_t0yzhpmnumse1bg6.jpg'
        },
        {
            id: 36,
            category: 4,
            name: 'CAFÉ MIMI candy floss',
            description: 'Попробуй обновляющий сахарный скраб для губ CANDY FLOSS CAFÉ MIMI! Скраб на основе пудры из тростникового сахара деликатно отшелушивает и обновляет кожу губ. Входящие в состав масла Какао, Ши и Миндаля глубоко увлажняют, смягчают, восстанавливают, разглаживают и защищают кожу губ от сухости и шелушения. Благодаря скрабу кожа губ становится нежной, гладкой и шелковистой, приобретает красивый здоровый цвет. Регулярное использование скраба замедляет процессы старения.',
            article: 10002640,
            price: 109,
            sizes: [],
            img: 'https://goldapple.ru/media/catalog/product/cache/df20e1840b63c7f40d0acee268900e66/4/6/4607967670367_1_qtjkgerenklsvwzg.jpg'
        },
    ],

    categoryList: [
        {
            id: 1,
            name: 'Одежда'
        },
        {
            id: 2,
            name: 'Обувь'
        },
        {
            id: 3,
            name: 'Аксессуары'
        },
        {
            id: 4,
            name: 'Косметика'
        },
    ],
    activeCategory: null,
    filteredCatalogList: '',
    chosenProduct: {}
}

export const catalogSlice = createSlice({
        name: 'catalog',
        initialState,
        reducers: {
            changeCategory: (state, action) => {
                // let newArr = state.catalogList.filter(item => action.payload === item.category)
                state.activeCategory = action.payload
                // state.filteredCatalogList = newArr
                // state.catalogList = newArr
            },
            setChosenProduct: (state, action) => {
                state.chosenProduct = action.payload
            },
            viewAllProducts: (state, action) => {
                state.activeCategory = ''
                state.filteredCatalogList = null
            },
            setSortOption: (state, action) => {
                let list = [...state.catalogList]
                if (action.payload === 'titleAZ') {
                    list.sort((a, b) => a['name'].localeCompare(b['name']))
                } else if (action.payload === 'titleZA') {
                    list.sort((a, b) => b['name'].localeCompare(a['name']))
                } else if (action.payload === 'price91') {
                    list.sort((a, b) => b['price'] - a['price'])
                } else if (action.payload === 'price19') {
                    list.sort((a, b) => a['price'] - b['price'])
                }
                state.catalogList = [...list]
            }
        },
    }
)

export const {changeCategory, setChosenProduct, viewAllProducts, setSortOption} = catalogSlice.actions
export default catalogSlice.reducer
