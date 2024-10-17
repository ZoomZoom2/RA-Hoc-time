import Time from './components/Time';

function App() {
  return (
    <div className={'wrapper'}>
      <header className={'header'} id={'header'}>
        <div className={'header__body _container'}>
          <h2 className={'header__title'}>Домашнее задание «HOC»</h2>
        </div>
      </header>

      <main className={'main'}>
        <div className={'main__item task _container'} id={'task1'}>
          <header className={'task__header'}>
            <h3 className={'task__title'}>Форматирование даты публикации</h3>
          </header>
          <div className={'task__body task__body_task1'}>
            <Time />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
