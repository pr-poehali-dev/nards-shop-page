import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const products = [
    {
      id: 1,
      name: 'Классические нарды "Премиум"',
      price: '45 000 ₽',
      material: 'Массив дуба, перламутр',
      image: '🎲',
      inStock: true,
    },
    {
      id: 2,
      name: 'Нарды "Мастер"',
      price: '32 000 ₽',
      material: 'Бук, латунь',
      image: '🎯',
      inStock: true,
    },
    {
      id: 3,
      name: 'Дорожные нарды',
      price: '18 000 ₽',
      material: 'Орех, сталь',
      image: '🧳',
      inStock: false,
    },
    {
      id: 4,
      name: 'Эксклюзивные нарды',
      price: '95 000 ₽',
      material: 'Эбеновое дерево, золото',
      image: '👑',
      inStock: true,
    },
  ];

  const deliveryOptions = [
    {
      region: 'Москва и МО',
      time: '1-2 дня',
      cost: 'Бесплатно',
      icon: 'MapPin',
    },
    {
      region: 'Санкт-Петербург',
      time: '2-3 дня',
      cost: '500 ₽',
      icon: 'Building2',
    },
    {
      region: 'Регионы России',
      time: '3-7 дней',
      cost: 'От 1000 ₽',
      icon: 'Truck',
    },
    {
      region: 'Международная',
      time: '7-14 дней',
      cost: 'По тарифам',
      icon: 'Globe',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-4xl">🎲</span>
              <h1 className="text-3xl font-bold">НАРДЫ</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <button
                onClick={() => scrollToSection('home')}
                className="hover:text-secondary transition-colors"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('mastery')}
                className="hover:text-secondary transition-colors"
              >
                Мастерство
              </button>
              <button
                onClick={() => scrollToSection('catalog')}
                className="hover:text-secondary transition-colors"
              >
                Каталог
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="hover:text-secondary transition-colors"
              >
                Контакты
              </button>
            </nav>
            <Button variant="secondary" size="sm">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-6xl font-bold mb-6 text-primary">
            Искусство игры в нарды
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ручная работа мастеров с вековыми традициями. Каждая доска — произведение искусства,
            созданное с любовью к древней игре.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('catalog')}>
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('mastery')}>
              Узнать о мастерстве
            </Button>
          </div>
        </div>
      </section>

      <section id="mastery" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4 text-primary">Мастерство</h2>
            <div className="ornament-divider">
              <span className="text-2xl">⚜️</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow animate-scale-in">
              <CardHeader>
                <div className="text-5xl mb-4 text-center">🪵</div>
                <CardTitle className="text-center">Отбор древесины</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Используем только отборные породы дерева: дуб, орех, эбен. Каждая заготовка
                  проходит многолетнюю сушку.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="text-5xl mb-4 text-center">✋</div>
                <CardTitle className="text-center">Ручная резьба</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Мастера вручную вырезают игровое поле, следуя традициям предков. Каждая деталь
                  уникальна.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="text-5xl mb-4 text-center">💎</div>
                <CardTitle className="text-center">Инкрустация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Украшаем доски перламутром, латунью и драгоценными металлами. Финишная обработка
                  маслом.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl italic text-primary">
              "Нарды — это не просто игра, это искусство, философия и традиция,
              передаваемая из поколения в поколение"
            </blockquote>
            <p className="mt-4 text-muted-foreground">— Мастер Александр Иванов</p>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-primary">Каталог</h2>
            <div className="ornament-divider">
              <span className="text-2xl">⚜️</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className="hover:shadow-2xl transition-all hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="text-7xl text-center mb-4">{product.image}</div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.material}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    {product.inStock ? (
                      <Badge variant="default">В наличии</Badge>
                    ) : (
                      <Badge variant="secondary">Под заказ</Badge>
                    )}
                  </div>
                  <Button className="w-full" variant={product.inStock ? 'default' : 'outline'}>
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-primary">Доставка</h2>
            <div className="ornament-divider">
              <span className="text-2xl">⚜️</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Бережно упакуем и доставим нарды в любую точку мира. Работаем с проверенными
              транспортными компаниями.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {deliveryOptions.map((option, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <Icon name={option.icon} size={48} className="mx-auto text-primary mb-4" />
                  <CardTitle className="text-lg">{option.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{option.time}</span>
                    </div>
                    <div className="text-xl font-bold text-primary">{option.cost}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Package" size={24} />
                  Упаковка
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Многослойная защитная упаковка с амортизацией</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Страхование груза на полную стоимость</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-primary mt-0.5" />
                    <span>Отслеживание посылки в режиме реального времени</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4 text-primary">Контакты</h2>
            <div className="ornament-divider">
              <span className="text-2xl">⚜️</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <Icon name="Phone" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <Icon name="Mail" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@nardy-master.ru</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-muted-foreground">
                        Волгоградская область, г. Камышин
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center gap-4 pt-6">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Пт: 10:00 - 19:00</p>
                      <p className="text-muted-foreground">Сб-Вс: 11:00 - 17:00</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Имя</label>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input type="tel" placeholder="+7 (___) ___-__-__" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input type="email" placeholder="your@email.ru" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea
                        placeholder="Расскажите, какие нарды вас интересуют..."
                        rows={4}
                      />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl">🎲</span>
            <h3 className="text-2xl font-bold">НАРДЫ</h3>
          </div>
          <p className="text-primary-foreground/80 mb-4">
            Традиции мастерства с 1995 года
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-6">
            © 2024 НАРДЫ. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}