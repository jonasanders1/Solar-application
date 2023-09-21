import {useNavigation, NavigationProp} from "@react-navigation/native"

// type for list of routes
type RouteList = {
    Welcome: undefined,
    HomeRoutes: undefined,
    DetailPage: undefined, 
    Search: undefined,
    Favorites: undefined
}

type SolarNavigationProps = NavigationProp<RouteList>

const useOwnNavigation = () => {
    const navigation = useNavigation<SolarNavigationProps>()

    // Function for navigating
    const navigate = (path: keyof RouteList) => {
        navigation.navigate(path)
    }
    // Functions for navigation backwards
    const goBack = () => {
        navigation.goBack()
    }

    return {navigate, goBack}
}

export default useOwnNavigation