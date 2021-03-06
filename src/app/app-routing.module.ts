import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TableComponent} from './table/table.component';
import {SlideshowComponent} from './slideshow/slideshow.component';
import { SpreadlistComponent } from './spreadlist/spreadlist.component';


const routes: Routes = [{path: 'appearances', component: TableComponent, data : {spread: "app"}},
                        {path: 'dashboard', component: DashboardComponent},
                        {path: 'asm', component: TableComponent, data : {spread: "asm"}},
                        {path: 'comic', component: SlideshowComponent, data: {spread: "comic"}},
                        {path: 'diabolique', component: SlideshowComponent, data: {spread: "dia"}},
                        {path: 'art', component: SpreadlistComponent, data: {spread: "art"}},
                        {path: 'toys', component: SpreadlistComponent, data: {spread: "toys"}},
                        {path: 'app', component: SpreadlistComponent, data: {spread: "appearance"}},
                        {path: 'comictitles', component: SpreadlistComponent, data: {spread: "comictitles"}},
                        {path: 'kids', component: SpreadlistComponent, data: {spread: 'kids'}},
                        {path: 'british', component: SpreadlistComponent, data: {spread: "british"}},
                        {path: 'misc', component: SpreadlistComponent, data: {spread: 'misc'}},
                        {path: 'showcasetoys', component: TableComponent, data: {spread: "showcase"}},
                        {path: 'boxedtoys', component: TableComponent, data: {spread: "boxed"}},
                        {path: "grailtoys", component: TableComponent, data: {spread: "grail"}},
                        {path: "giveaways", component: SpreadlistComponent, data: {spread: "giveaway"}},
                        {path: "largegiveaways", component: TableComponent, data: {spread: "largegiveaway"}},
                        {path: "comicgiveaways", component: TableComponent, data: {spread: "comicgiveaway"}},
                        {path: "raregiveaways", component: TableComponent, data: {spread: "raregiveaway"}},
                        {path: "smallgiveaways", component: TableComponent, data: {spread: "smallgiveaway"}},
                        {path: "rest", component: SpreadlistComponent, data: {spread: "rest"}},
                        {path: 'asmappearancesinmagazines', component: TableComponent, data: {spread: 'asmappearancesinmagazines'}},
                        {path: 'asmearlyunslabbedappearances', component: TableComponent, data: {spread: 'asmearlyunslabbedappearances'}},
                        {path: 'asmhighvalueappearancescgc', component: TableComponent, data: {spread: 'asmhighvalueappearancescgc'}},
                        {path: 'cerealfoodboxesandcalendars', component: TableComponent, data: {spread: 'cerealfoodboxesandcalendars'}},
                        {path: 'comestolifebooksandreader', component: TableComponent, data: {spread: 'comestolifebooksandreader'}},
                        {path: 'comicon', component: TableComponent, data: {spread: 'comicon'}},
                        {path: 'crackedcrazyandmadmag', component: TableComponent, data: {spread: 'crackedcrazyandmadmag'}},
                        {path: 'electriccompanymagazinescomplete', component: TableComponent, data: {spread: 'electriccompanymagazinescomplete'}},
                        {path: 'fanzines', component: TableComponent, data: {spread: 'fanzines'}},
                        {path: 'giantsizebooksorig', component: TableComponent, data: {spread: 'giantsizebooksorig'}},
                        {path: 'giantsizedcoloringbooksanditems', component: TableComponent, data: {spread: 'giantsizedcoloringbooksanditems'}},
                        {path: 'handbookmarveluniverse', component: TableComponent, data: {spread: 'handbookmarveluniverse'}},
                        {path: 'marvelageannpreview', component: TableComponent, data: {spread: 'marvelageannpreview'}},
                        {path: 'marvelteamupuk', component: TableComponent, data: {spread: 'marvelteamupuk'}},
                        {path: 'marvelteamup', component: TableComponent, data: {spread: 'marvelteamup'}},
                        {path: 'mightyworldofmarveluk', component: TableComponent, data: {spread: 'mightyworldofmarveluk'}},
                        {path: 'nude', component: TableComponent, data: {spread: 'nude'}},
                        {path: 'officialhandbookmarveluniverse', component: TableComponent, data: {spread: 'officialhandbookmarveluniverse'}},
                        {path: 'officialhandbooksmarveluniverseall', component: TableComponent, data: {spread: 'officialhandbooksmarveluniverseall'}},
                        {path: 'peterparkerspectacularspiderman', component: TableComponent, data: {spread: 'peterparkerspectacularspiderman'}},
                        {path: 'peterparkerspidermanvol', component: TableComponent, data: {spread: 'peterparkerspidermanvol'}},
                        {path: 'salestoastonishmegamarveldealercatalogs', component: TableComponent, data: {spread: 'salestoastonishmegamarveldealercatalogs'}},
                        {path: 'sensationalspiderman', component: TableComponent, data: {spread: 'sensationalspiderman'}},
                        {path: 'spectacularspidermanannuals', component: TableComponent, data: {spread: 'spectacularspidermanannuals'}},
                        {path: 'spidergirl', component: TableComponent, data: {spread: 'spidergirl'}},
                        {path: 'spidermancomicsweeklyuk', component: TableComponent, data: {spread: 'spidermancomicsweeklyuk'}},
                        {path: 'spidermanflipbooks', component: TableComponent, data: {spread: 'spidermanflipbooks'}},
                        {path: 'spidermangottliebpinballbooks', component: TableComponent, data: {spread: 'spidermangottliebpinballbooks'}},
                        {path: 'spidermanoffbeatrareitems', component: TableComponent, data: {spread: 'spidermanoffbeatrareitems'}},
                        {path: 'spidermantpbgraphicnovelspbandhc', component: TableComponent, data: {spread: 'spidermantpbgraphicnovelspbandhc'}},
                        {path: 'spidermanuksummer_wintsps', component: TableComponent, data: {spread: 'spidermanuksummer_wintsps'}},
                        {path: 'spiderman1990mcfarlane', component: TableComponent, data: {spread: 'spiderman1990mcfarlane'}},
                        {path: 'spiderman30centvariants', component: TableComponent, data: {spread: 'spiderman30centvariants'}},
                        {path: 'spidermancassettes', component: TableComponent, data: {spread: 'spidermancassettes'}},
                        {path: 'spideybritishhardcoverbooks', component: TableComponent, data: {spread: 'spideybritishhardcoverbooks'}},
                        {path: 'spideypaperbackbooks', component: TableComponent, data: {spread: 'spideypaperbackbooks'}},
                        {path: 'spideysatellitetitles', component: TableComponent, data: {spread: 'spideysatellitetitles'}},
                        {path: 'spideysmallbooks', component: TableComponent, data: {spread: 'spideysmallbooks'}},
                        {path: 'stanlee', component: TableComponent, data: {spread: 'stanlee'}},
                        {path: 'stevelevinesmarveltales', component: TableComponent, data: {spread: 'stevelevinesmarveltales'}},
                        {path: 'stevelevinesoneshotsminiseries', component: TableComponent, data: {spread: 'stevelevinesoneshotsminiseries'}},
                        {path: 'stevelevinesoversizedspidermanmagazines', component: TableComponent, data: {spread: 'stevelevinesoversizedspidermanmagazines'}},
                        {path: 'stevelevinesspidermanrecordsvinyls', component: TableComponent, data: {spread: 'stevelevinesspidermanrecordsvinyls'}},
                        {path: 'stevelevinesspideykids', component: TableComponent, data: {spread: 'stevelevinesspideykids'}},
                        {path: 'stevelevinestribcomicbooks', component: TableComponent, data: {spread: 'stevelevinestribcomicbooks'}},
                        {path: 'sundaybulletinsundaystrips', component: TableComponent, data: {spread: 'sundaybulletinsundaystrips'}},
                        {path: 'toybizkooltoysgiveaways', component: TableComponent, data: {spread: 'toybizkooltoysgiveaways'}},
                        {path: 'toyfaremagazine', component: TableComponent, data: {spread: 'toyfaremagazine'}},
                        {path: 'trademagazines', component: TableComponent, data: {spread: 'trademagazines'}},
                        {path: 'ultimatespidermanandult', component: TableComponent, data: {spread: 'ultimatespidermanandult'}},
                        {path: 'webofspidermanandannuals', component: TableComponent, data: {spread: 'webofspidermanandannuals'}},
                        {path: 'webspinners', component: TableComponent, data: {spread: 'webspinners'}},
                        {path: '', redirectTo: '/dashboard', pathMatch: 'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
