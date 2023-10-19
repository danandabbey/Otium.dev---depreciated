import { useContext } from 'react';
import { dataContext } from '../weather_app';
import { styleContext } from '../../../components/Context'

const Current = (() => {
    try {
        const data: any = useContext(dataContext);
        const style: any = useContext(styleContext);
        const currentData = data.current
        const desc = currentData.description;
        const precipitation = `${currentData.precipitation}% chance`;
        const temp = `${currentData.temp}\u00b0F`;
        const humidity = `Humidity: ${currentData.humidity}%`;
        const wind = `Wind: ${currentData.windDirection} ${currentData.windSpeed}`;
        const city = currentData.city;
        const state = currentData.state;
        return (
            <div style={style.current}>
                <div>
                    <h2 style={style.currentTitle}>{city}, {state}</h2>
                </div>
                <br />
                <div>
                    <h4>{desc}</h4>
                    <h4>{precipitation}</h4>
                    <h4>{temp}</h4>
                </div>
                <br />
                <div>
                    <h4>{humidity}</h4>
                    <h4>{wind}</h4>
                </div>
            </div>
        );
    } catch (error) {
        console.log(error)
    }
});

export default Current;   