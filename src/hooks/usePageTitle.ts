import { useLocation } from "react-router-dom";
import { SITE_NAME } from "../config";

export function usePageTitle() {
    const location = useLocation();
    const basename = SITE_NAME;
    switch (location.pathname) {
        case '/': document.title = basename; break;
        case '/reports': document.title = basename + ' - Denuncias'; break;
        case '/about': document.title = basename + ' - Nosotros'; break;
        case '/services': document.title = basename + ' - Servicios'; break;
        case '/contact': document.title = basename + ' - Contacto'; break;
        case '/plans': document.title = basename + ' - Planes'; break;
        default: document.title = basename;
    }
}
