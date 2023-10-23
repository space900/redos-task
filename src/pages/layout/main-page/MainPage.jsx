const MainPage = () => {
    const userName = localStorage.getItem('name');

    return (
        <div>
            <h1>Главная</h1>
            <p>Привет, {userName ?? 'гость'}</p>
        </div>
    );
};

export default MainPage;