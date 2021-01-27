import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicDataService {
  private appearancesURL = "https://spider-steve-backend.wl.r.appspot.com/appearances/";
  private asmURL = "https://spider-steve-backend.wl.r.appspot.com/ASM/";
  private boxedtoysurl = "https://spider-steve-backend.wl.r.appspot.com/boxedtoys/";
  private showcasetoysurl = "https://spider-steve-backend.wl.r.appspot.com/showcasetoys/";
  private grailtoysurl = "https://spider-steve-backend.wl.r.appspot.com/grailtoys/";
  private largegiveawayurl = "https://spider-steve-backend.wl.r.appspot.com/largegiveaway/";
  private comicgiveawayurl = "https://spider-steve-backend.wl.r.appspot.com/comicgiveaway/";
  private raregiveawayurl = "https://spider-steve-backend.wl.r.appspot.com/raregiveaway/";
  private smallgiveawayurl = "https://spider-steve-backend.wl.r.appspot.com/smallgiveaway/";
  
  private asmappearancesinmagazinesurl = "https://spider-steve-backend.wl.r.appspot.com/ASMAppearancesinMagazines/"
  private asmearlyunslabbedappearancesurl = "https://spider-steve-backend.wl.r.appspot.com/ASMEarlyUnslabbedAppearances/"
  private asmhighvalueappearancescgcurl = "https://spider-steve-backend.wl.r.appspot.com/ASMHighValueAppearancesCGC/"
  private cerealfoodboxesandcalendarsurl = "https://spider-steve-backend.wl.r.appspot.com/CerealFoodBoxesandCalendars/"
  private comestolifebooksandreaderurl = "https://spider-steve-backend.wl.r.appspot.com/ComesToLifeBooksandReader/"
  private comiconurl = "https://spider-steve-backend.wl.r.appspot.com/Comicon/"
  private crackedcrazyandmadmagurl = "https://spider-steve-backend.wl.r.appspot.com/CrackedCrazyandMadMag/"
  private electriccompanymagazinescompleteurl = "https://spider-steve-backend.wl.r.appspot.com/ElectricCompanyMagazinesComplete/"
  private fanzinesurl = "https://spider-steve-backend.wl.r.appspot.com/Fanzines/"
  private giantsizebooksorigurl = "https://spider-steve-backend.wl.r.appspot.com/GiantSizeBooksOrig/"
  private giantsizedcoloringbooksanditemsurl = "https://spider-steve-backend.wl.r.appspot.com/GiantSizedColoringBooksandItems/"
  private handbookmarveluniverseurl = "https://spider-steve-backend.wl.r.appspot.com/HandbookMarvelUniverse/"
  private marvelageannpreviewurl = "https://spider-steve-backend.wl.r.appspot.com/MarvelAgeAnnPreview/"
  private marvelteamupukurl = "https://spider-steve-backend.wl.r.appspot.com/MarvelTeamUpUK/"
  private marvelteamupurl = "https://spider-steve-backend.wl.r.appspot.com/MarvelTeamUp/"
  private mightyworldofmarvelukurl = "https://spider-steve-backend.wl.r.appspot.com/MightyWorldofMarvelUK/"
  private nudeurl = "https://spider-steve-backend.wl.r.appspot.com/Nude/"
  private officialhandbookmarveluniverseurl = "https://spider-steve-backend.wl.r.appspot.com/OfficialHandbookMarvelUniverse/"
  private officialhandbooksmarveluniverseallurl = "https://spider-steve-backend.wl.r.appspot.com/OfficialHandbooksMarvelUniverseALL/"
  private peterparkerspectacularspidermanurl = "https://spider-steve-backend.wl.r.appspot.com/PeterParkerSpectaularSpiderman/"
  private peterparkerspidermanvolurl = "https://spider-steve-backend.wl.r.appspot.com/PeterParkerSpiderManVol/"
  private salestoastonishmegamarveldealercatalogsurl = "https://spider-steve-backend.wl.r.appspot.com/SalesToAstonishMegaMarvelDealerCatalogs/"
  private sensationalspidermanurl = "https://spider-steve-backend.wl.r.appspot.com/SensationalSpiderMan/"
  private spectacularspidermanannualsurl = "https://spider-steve-backend.wl.r.appspot.com/SpectacularSpidermanAnnuals/"
  private spidergirlurl = "https://spider-steve-backend.wl.r.appspot.com/SpiderGirl/"
  private spidermancomicsweeklyukurl = "https://spider-steve-backend.wl.r.appspot.com/SpiderManComicsWeeklyUK/"
  private spidermanflipbooksurl = "https://spider-steve-backend.wl.r.appspot.com/SpiderManFlipbooks/"
  private spidermangottliebpinballbooksurl = "https://spider-steve-backend.wl.r.appspot.com/SpiderManGottliebPinballBooks/"
  private spidermanoffbeatrareitemsurl = "https://spider-steve-backend.wl.r.appspot.com/SpiderManOffBeatRareItems/"
  private spidermantpbgraphicnovelspbandhcurl = "https://spider-steve-backend.wl.r.appspot.com/SpiderManTPBGraphicNovelsPBandHC/"
  private spidermanuksummer_wintspsurl = "https://spider-steve-backend.wl.r.appspot.com/SpiderManUKSummer_WintSps/"
  private spiderman1990mcfarlaneurl = "https://spider-steve-backend.wl.r.appspot.com/Spiderman1990McFarlane/"
  private spiderman30centvariantsurl = "https://spider-steve-backend.wl.r.appspot.com/spiderman30centvariants/"
  private spidermancassettesurl = "https://spider-steve-backend.wl.r.appspot.com/SpidermanCassettes/"
  private spideybritishhardcoverbooksurl = "https://spider-steve-backend.wl.r.appspot.com/SpideyBritishHardcoverBooks/"
  private spideypaperbackbooksurl = "https://spider-steve-backend.wl.r.appspot.com/SpideyPaperbackBooks/"
  private spideysatellitetitlesurl = "https://spider-steve-backend.wl.r.appspot.com/SpideySatelliteTitles/"
  private spideysmallbooksurl = "https://spider-steve-backend.wl.r.appspot.com/SpideySmallBooks/"
  private stanleeurl = "https://spider-steve-backend.wl.r.appspot.com/StanLee/"
  private stevelevinesmarveltalesurl = "https://spider-steve-backend.wl.r.appspot.com/SteveLevinesMarvelTales/"
  private stevelevinesoneshotsminiseriesurl = "https://spider-steve-backend.wl.r.appspot.com/SteveLevinesOneShotsMiniseries/"
  private stevelevinesoversizedspidermanmagazinesurl = "https://spider-steve-backend.wl.r.appspot.com/SteveLevinesOversizedSpiderManMagazines/"
  private stevelevinesspidermanrecordsvinylsurl = "https://spider-steve-backend.wl.r.appspot.com/SteveLevinesSpiderManRecordsVinyls/"
  private stevelevinesspideykidsurl = "https://spider-steve-backend.wl.r.appspot.com/SteveLevinesSpideyKids/"
  private stevelevinestribcomicbooksurl = "https://spider-steve-backend.wl.r.appspot.com/SteveLevinesTribComicBooks/"
  private sundaybulletinsundaystripsurl = "https://spider-steve-backend.wl.r.appspot.com/SundayBulletinSundayStrips/"
  private toybizkooltoysgiveawaysurl = "https://spider-steve-backend.wl.r.appspot.com/ToyBizKoolToysGiveaways/"
  private toyfaremagazineurl = "https://spider-steve-backend.wl.r.appspot.com/ToyfareMagazine/"
  private trademagazinesurl = "https://spider-steve-backend.wl.r.appspot.com/TradeMagazines/"
  private ultimatespidermanandulturl = "https://spider-steve-backend.wl.r.appspot.com/UltimateSpiderManandUlt/"
  private webofspidermanandannualsurl = "https://spider-steve-backend.wl.r.appspot.com/WebofSpiderManandAnnuals/"
  private webspinnersurl = "https://spider-steve-backend.wl.r.appspot.com/Webspinners/"


  constructor(private http: HttpClient) { }

  getAppearances() : any {
    return this.http.get(this.appearancesURL);
  }
  getASM() : any {
    return this.http.get(this.asmURL);
  }
  getboxedtoys(): any {
    return this.http.get(this.boxedtoysurl);
  }
  getshowcasetoys(): any {
    return this.http.get(this.showcasetoysurl);
  }
  getgrailtoys(): any {
    return this.http.get(this.grailtoysurl);
  }
  getlargeGiveAway(): any {
    return this.http.get(this.largegiveawayurl);
  }
  getcomicGiveAway(): any {
    return this.http.get(this.comicgiveawayurl);
  }
  getrareGiveAway(): any {
    return this.http.get(this.raregiveawayurl);
  }
  getsmallGiveAway(): any {
    return this.http.get(this.smallgiveawayurl);
  }
  getASMAppearancesinMagazines(): any {
    return this.http.get(this.asmappearancesinmagazinesurl);
  }
  getASMEarlyUnslabbedAppearances(): any {
    return this.http.get(this.asmearlyunslabbedappearancesurl);
  }
  getASMHighValueAppearancesCGC(): any {
    return this.http.get(this.asmhighvalueappearancescgcurl);
  }
  getCerealFoodBoxesandCalendars(): any {
    return this.http.get(this.cerealfoodboxesandcalendarsurl);
  }
  getComesToLifeBooksandReader(): any {
    return this.http.get(this.comestolifebooksandreaderurl);
  }
  getComicon(): any {
    return this.http.get(this.comiconurl);
  }
  getCrackedCrazyandMadMag(): any {
    return this.http.get(this.crackedcrazyandmadmagurl);
  }
  getElectricCompanyMagazinesComplete(): any {
    return this.http.get(this.electriccompanymagazinescompleteurl);
  }
  getFanzines(): any {
    return this.http.get(this.fanzinesurl);
  }
  getGiantSizeBooksOrig(): any {
    return this.http.get(this.giantsizebooksorigurl);
  }
  getGiantSizedColoringBooksandItems(): any {
    return this.http.get(this.giantsizedcoloringbooksanditemsurl);
  }
  getHandbookMarvelUniverse(): any {
    return this.http.get(this.handbookmarveluniverseurl);
  }
  getMarvelAgeAnnPreview(): any {
    return this.http.get(this.marvelageannpreviewurl);
  }
  getMarvelTeamUpUK(): any {
    return this.http.get(this.marvelteamupukurl);
  }
  getMarvelTeamUp(): any {
    return this.http.get(this.marvelteamupurl);
  }
  getMightyWorldofMarvelUK(): any {
    return this.http.get(this.mightyworldofmarvelukurl);
  }
  getNude(): any {
    return this.http.get(this.nudeurl);
  }
  getOfficialHandbookMarvelUniverse(): any {
    return this.http.get(this.officialhandbookmarveluniverseurl);
  }
  getOfficialHandbooksMarvelUniverseALL(): any {
    return this.http.get(this.officialhandbooksmarveluniverseallurl);
  }
  getPeterParkerSpectacularSpiderman(): any {
    return this.http.get(this.peterparkerspectacularspidermanurl);
  }
  getPeterParkerSpiderManVol(): any {
    return this.http.get(this.peterparkerspidermanvolurl);
  }
  getSalesToAstonishMegaMarvelDealerCatalogs(): any {
    return this.http.get(this.salestoastonishmegamarveldealercatalogsurl);
  }
  getSensationalSpiderMan(): any {
    return this.http.get(this.sensationalspidermanurl);
  }
  getSpectacularSpidermanAnnuals(): any {
    return this.http.get(this.spectacularspidermanannualsurl);
  }
  getSpiderGirl(): any {
    return this.http.get(this.spidergirlurl);
  }
  getSpiderManComicsWeeklyUK(): any {
    return this.http.get(this.spidermancomicsweeklyukurl);
  }
  getSpiderManFlipbooks(): any {
    return this.http.get(this.spidermanflipbooksurl);
  }
  getSpiderManGottliebPinballBooks(): any {
    return this.http.get(this.spidermangottliebpinballbooksurl);
  }
  getSpiderManOffBeatRareItems(): any {
    return this.http.get(this.spidermanoffbeatrareitemsurl);
  }
  getSpiderManTPBGraphicNovelsPBandHC(): any {
    return this.http.get(this.spidermantpbgraphicnovelspbandhcurl);
  }
  getSpiderManUKSummer_WintSps(): any {
    return this.http.get(this.spidermanuksummer_wintspsurl);
  }
  getSpiderman1990McFarlane(): any {
    return this.http.get(this.spiderman1990mcfarlaneurl);
  }
  getspiderman30centvariants(): any {
    return this.http.get(this.spiderman30centvariantsurl);
  }
  getSpidermanCassettes(): any {
    return this.http.get(this.spidermancassettesurl);
  }
  getSpideyBritishHardcoverBooks(): any {
    return this.http.get(this.spideybritishhardcoverbooksurl);
  }
  getSpideyPaperbackBooks(): any {
    return this.http.get(this.spideypaperbackbooksurl);
  }
  getSpideySatelliteTitles(): any {
    return this.http.get(this.spideysatellitetitlesurl);
  }
  getSpideySmallBooks(): any {
    return this.http.get(this.spideysmallbooksurl);
  }
  getStanLee(): any {
    return this.http.get(this.stanleeurl);
  }
  getSteveLevinesMarvelTales(): any {
    return this.http.get(this.stevelevinesmarveltalesurl);
  }
  getSteveLevinesOneShotsMiniseries(): any {
    return this.http.get(this.stevelevinesoneshotsminiseriesurl);
  }
  getSteveLevinesOversizedSpiderManMagazines(): any {
    return this.http.get(this.stevelevinesoversizedspidermanmagazinesurl);
  }
  getSteveLevinesSpiderManRecordsVinyls(): any {
    return this.http.get(this.stevelevinesspidermanrecordsvinylsurl);
  }
  getSteveLevinesSpideyKids(): any {
    return this.http.get(this.stevelevinesspideykidsurl);
  }
  getSteveLevinesTribComicBooks(): any {
    return this.http.get(this.stevelevinestribcomicbooksurl);
  }
  getSundayBulletinSundayStrips(): any {
    return this.http.get(this.sundaybulletinsundaystripsurl);
  }
  getToyBizKoolToysGiveaways(): any {
    return this.http.get(this.toybizkooltoysgiveawaysurl);
  }
  getToyfareMagazine(): any {
    return this.http.get(this.toyfaremagazineurl);
  }
  getTradeMagazines(): any {
    return this.http.get(this.trademagazinesurl);
  }
  getUltimateSpiderManandUlt(): any {
    return this.http.get(this.ultimatespidermanandulturl);
  }
  getWebofSpiderManandAnnuals(): any {
    return this.http.get(this.webofspidermanandannualsurl);
  }
  getWebspinners(): any {
    return this.http.get(this.webspinnersurl);
  }
}
