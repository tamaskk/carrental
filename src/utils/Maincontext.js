import { createContext, useContext, useState } from "react";
import audiA1 from '../assets/audia1.d038cf70b700e34e607a.webp'
import vwGolf6 from '../assets/golf6.595c0bbfc7ce2e50aa05.webp'
import toyotaCamry from '../assets/toyotacamry.3d493a56558c50b677cc.webp'
import bmw320 from '../assets/bmw320.84ab73b0c9133418f907.webp'
import mercedesbenz from '../assets/benz.0a6153731a2c1a68054a.webp'
import passatcc from '../assets/passatcc.bd82bd1deac8c11e3c4d.webp'

const MainContextFile = createContext();

export const ContextProvider = ({ children }) => {

    const [menuView, setMenuView] = useState(false);
    const [vehicleModel, setVehicleModel] = useState('Audi A1 S-Line')
    const [choosenVehicleModel, setChoosenVehicleModel] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [dropoffLocation, setDropoffLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [dropoffDate, setDropoffDate] = useState('');
    const [error, setError] = useState(false);
    const [overlay, setOverlay] = useState(false)

    const layoverHandler = () => {
        setOverlay((prev) => !prev)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        // Check if any of the required fields is empty
        if (!choosenVehicleModel || !pickupLocation || !dropoffLocation || !pickupDate || !dropoffDate) {
            setError(true);
        } else {
            // Proceed with the search
            setError(false);
            setOverlay(true);
        }
    };

    const menuOpenHandler = () => {
        setMenuView(prev => !prev)
    }

    const vehicleList = {
        'Audi A1 S-Line': {
          'Model': 'Audi',
          'Mark': 'A1',
          'Year': '2012',
          'Doors': '4/5',
          'AC': 'Yes',
          'Transmission': 'Manual',
          'Fuel': 'Gasoline',
          'Price': 45,
          'Picture': audiA1
        },
        'VW Golf 6': {
          'Model': 'Volkswagen',
          'Mark': 'Golf 6',
          'Year': '2008',
          'Doors': '4/5',
          'AC': 'Yes',
          'Transmission': 'Manual',
          'Fuel': 'Diesel',
          'Price': 24,
          'Picture': vwGolf6
        },
        'Toyota Camry': {
          'Model': 'Toyota',
          'Mark': 'Camry',
          'Year': '2006',
          'Doors': '4/5',
          'AC': 'Yes',
          'Transmission': 'Automatic',
          'Fuel': 'Hybrid',
          'Price': 32,
          'Picture': toyotaCamry
        },
        'BMW 320 ModernLine': {
          'Model': 'BMW',
          'Mark': '320',
          'Year': '2012',
          'Doors': '4/5',
          'AC': 'Yes',
          'Transmission': 'Manual',
          'Fuel': 'Diesel',
          'Price': 46,
          'Picture': bmw320
        },
        'Mercedes-Benz GLK': {
          'Model': 'Mercedes',
          'Mark': 'Benz GLK',
          'Year': '2006',
          'Doors': '4/5',
          'AC': 'Yes',
          'Transmission': 'Manual',
          'Fuel': 'Diesel',
          'Price': 60,
          'Picture': mercedesbenz
        },
        'VW Passat CC': {
          'Model': 'Volkswagen',
          'Mark': 'Passat CC',
          'Year': '2008',
          'Doors': '4/5',
          'AC': 'Yes',
          'Transmission': 'Automatic',
          'Fuel': 'Gasoline',
          'Price': 40,
          'Picture': passatcc
        },
      }

    const mainContextValue = {
        menuView, 
        menuOpenHandler, 
        handleSearch, 
        layoverHandler, 
        overlay, 
        error, 
        vehicleModel, 
        setVehicleModel,
        choosenVehicleModel, 
        setChoosenVehicleModel,
        pickupLocation, 
        setPickupLocation,
        dropoffLocation, 
        setDropoffLocation,
        pickupDate, 
        setPickupDate,
        dropoffDate, 
        setDropoffDate,
        vehicleList
    }

    return (
        <MainContextFile.Provider value={mainContextValue}>
            {children}
        </MainContextFile.Provider>
    )
}

export const useMainContext = () => useContext(MainContextFile);
