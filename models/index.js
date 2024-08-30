const Categories = require('./Categories');
const Customers = require('./Customers');
const Movies = require('./Movies');
const Series = require('./Series');
const Documentaries = require('./Documentaries');
const Animations = require('./Animations_Anime');
const Kids = require('./Kids');
const Reality = require('./Reality');
const StandUpComedy = require('./Stand_Up_Comedy');

module.exports = {
    categories: new Categories(),
    customers: new Customers(),
    movies: new Movies(),
    series: new Series(),
    documentaries: new Documentaries(),
    animations: new Animations(),
    kids: new Kids(),
    reality: new Reality(),
    standUp: new StandUpComedy()
}