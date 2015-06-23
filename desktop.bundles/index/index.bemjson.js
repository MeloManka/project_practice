({
    block : 'page',
    title : 'Mila-promo-game',
    favicon : '',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : '_index.css' }
    ],
    scripts: [
        { elem : 'js', url : '_index.js' },
        { elem:  'js', url:'https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'},
        { elem : 'js', url : 'scroll.js' }
    ],
    mods : { theme : 'mila' },
    content : [
        {
            block:'content',
            content: [
                {
                    block: 'header',
                    content: [
                        {
                            block:  'navigation',
                            mix:{  block:'header',elem:'navigation'},
                            content:[
                                {
                                    block: 'menu-nav',
                                    tag: 'ul',
                                    mix: {block: 'navigation', elem: 'menu-nav'},
                                    content: [
                                        {
                                            elem: 'item',
                                            tag:'a',
                                            url: '.rules',
                                            content: 'Правила участия'
                                        },
                                        {
                                            elem: 'item',
                                            tag:'a',
                                            url: '.prize',
                                            content: 'Призы'
                                        },
                                        {
                                            elem: 'item',
                                            tag:'a',
                                            url: '.additional-prizes',
                                            content: 'Информация от организатора'
                                        },
                                        {
                                            elem: 'item',
                                            tag:'a',
                                            url: '.button1',
                                            content: 'Принять участие'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'logo',
                            mix:{block:'header',elem:'logo'},
                            content: {}
                        },
                        {
                            elem:'header-content',
                            content:[
                                {
                                    elem: 'text1',
                                    tag: 'p',
                                    content: 'Выиграй тур на двоих <br> или один из сотни призов!'
                                },
                                {
                                    elem: 'text2',
                                    tag: 'p',
                                    content: 'с 1 декабря 2014 по 15 января 2015 прими участие в рекламной игре Возраждение богини и выигрывай призы!'
                                },
                                {
                                    block: 'button1',
                                    tag: 'button',
                                    mix: {block: 'header', elem: 'button1'},
                                    mods: {type: 'link'},
                                    url: '',
                                    content: 'Участвовать в игре!'
                                }
                            ]
                        }

                    ]
                },
                {
                    block:'rules',
                    content:[
                        {
                            elem:'left',
                            content:[
                                {
                                    elem:'title',
                                    tag:'p',
                                    content:'Правила участия'
                                },
                                {
                                    elem:'description',
                                    tag:'p',
                                    content:'Совершите покупку продукции CLEANIC в любом магазине "Мила" на сумму более 30 000 рублей в одном чеке. Сфотографируйте чек, заполните анкету участника и ожидайте розыгрыша!'
                                },
                                {
                                    elem:'button2',
                                    tag:'button',
                                    content:'Заполнить анкету!'
                                }
                            ]
                        },
                        {
                            elem:'right',
                            content:{
                                elem:'image1',
                                content:{}
                            }
                        }
                    ]
                },
                {
                    block:'prize',
                    content:[
                        {
                            elem:'people2',
                            content:''
                        },
                        {
                            elem:'prize-content',
                            content:[
                                {
                                    elem: 'title',
                                    content: 'Главный приз &#151 <br>тур на двоих&nbsp&nbspв Ларнаку'
                                },
                                {
                                    elem: 'description',
                                    content: 'Тур в Ларнаку - это семь дней отличного совместного отдыха, масса впечатлений и отличный повод побыть вдвоём!'
                                }
                            ]
                        }
                    ]
                },
                {
                    block:'additional-prizes',
                    content:[
                        {
                            elem:'title',
                            content:'Дополнительные призы'
                        },
                        {
                            block:'prizes',
                            content:[
                                {
                                    elem:'prize',
                                    content:[
                                        {
                                            block:'image',
                                            url:'../../../img/Image1.png'
                                        },
                                        {
                                            elem:'info',
                                            content:[
                                                {
                                                    elem: 'number',
                                                    content: '3'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Роскошных ожерелья из белого жемчуга'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem:'prize',
                                    content:[
                                        {
                                            block:'image',
                                            url:'../../../img/Image2.png'
                                        },
                                        {
                                            elem:'info',
                                            content:[
                                                {
                                                    elem: 'number',
                                                    content: '10'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Комплектов постельного белья'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem:'prize',
                                    content:[
                                        {
                                            block:'image',
                                            url:'../../../img/Image3.png'
                                        },
                                        {
                                            elem:'info',
                                            content:[
                                                {
                                                    elem: 'number',
                                                    content: '100'
                                                },
                                                {
                                                    elem: 'description',
                                                    content: 'Наборов косметики CLEANIC'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block:'button1',
                            mix:{block:'additional-prizes', elem:'button1'},
                            tag:'button',
                            content:'Участвовать в игре!'
                        }
                    ]
                },
                {
                    block:'footer',
                    content:[
                        {
                            elem:'logo-Mila',
                            content:''
                        },
                        {
                            elem:'description',
                            content:'Сеть магазинов "Мила". ООО "Парфюм Трейд", УНП 190805026. Зарегестрирован решением Минского горисполкома от 15.02.2007 г. № 294. Регистрационный номер: 190805026.<br> Менковский тракт, 14, комната 107, Щомыслицкий с/с, район деревни Озерцо, 223021, Минская область, Минский район, Республика Беларусь.'
                        },
                        {
                            elem:'logo-Lovata',
                            content:''
                        }
                    ]
                }
            ]
        }
    ]
})
