import sayHello from "./modules/hello"
import sayGoodbye from "./modules/goodbye"
import {places} from "./modules/countrySelect";
import {submit} from "./modules/newPoint";
import {renderInterestEntries} from "./modules/outputDom";
import {buildInterestDOM} from "./modules/outputDOM";

renderInterestEntries();
submit;
places;
sayHello();
sayGoodbye();
