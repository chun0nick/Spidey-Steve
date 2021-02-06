import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicDataService {
  private appearancesURL = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/appearances/";
  private asmURL = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/ASM/";
  private boxedtoysurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/boxedtoys/";
  private showcasetoysurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/showcasetoys/";
  private grailtoysurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/grailtoys/";
  private largegiveawayurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/largegiveaway/";
  private comicgiveawayurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/comicgiveaway/";
  private raregiveawayurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/raregiveaway/";
  private smallgiveawayurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/smallgiveaway/";
  private asmappearancesinmagazinesurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/ASMAppearancesinMagazines/"
  private asmearlyunslabbedappearancesurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/ASMEarlyUnslabbedAppearances/"
  private asmhighvalueappearancescgcurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/ASMHighValueAppearancesCGC/"
  private cerealfoodboxesandcalendarsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/CerealFoodBoxesandCalendars/"
  private comestolifebooksandreaderurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/ComesToLifeBooksandReader/"
  private comiconurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/Comicon/"
  private crackedcrazyandmadmagurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/CrackedCrazyandMadMag/"
  private electriccompanymagazinescompleteurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/ElectricCompanyMagazinesComplete/"
  private fanzinesurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/Fanzines/"
  private giantsizebooksorigurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/GiantSizeBooksOrig/"
  private giantsizedcoloringbooksanditemsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/GiantSizedColoringBooksandItems/"
  private handbookmarveluniverseurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/HandbookMarvelUniverse/"
  private marvelageannpreviewurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/MarvelAgeAnnPreview/"
  private marvelteamupukurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/MarvelTeamUpUK/"
  private marvelteamupurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/MarvelTeamUp/"
  private mightyworldofmarvelukurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/MightyWorldofMarvelUK/"
  private nudeurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/Nude/"
  private officialhandbookmarveluniverseurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/OfficialHandbookMarvelUniverse/"
  private officialhandbooksmarveluniverseallurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/OfficialHandbooksMarvelUniverseALL/"
  private peterparkerspectacularspidermanurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/PeterParkerSpectaularSpiderman/"
  private peterparkerspidermanvolurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/PeterParkerSpiderManVol/"
  private salestoastonishmegamarveldealercatalogsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SalesToAstonishMegaMarvelDealerCatalogs/"
  private sensationalspidermanurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SensationalSpiderMan/"
  private spectacularspidermanannualsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpectacularSpidermanAnnuals/"
  private spidergirlurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpiderGirl/"
  private spidermancomicsweeklyukurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpiderManComicsWeeklyUK/"
  private spidermanflipbooksurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpiderManFlipbooks/"
  private spidermangottliebpinballbooksurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpiderManGottliebPinballBooks/"
  private spidermanoffbeatrareitemsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpiderManOffBeatRareItems/"
  private spidermantpbgraphicnovelspbandhcurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpiderManTPBGraphicNovelsPBandHC/"
  private spidermanuksummer_wintspsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpiderManUKSummer_WintSps/"
  private spiderman1990mcfarlaneurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/Spiderman1990McFarlane/"
  private spiderman30centvariantsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/spiderman30centvariants/"
  private spidermancassettesurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpidermanCassettes/"
  private spideybritishhardcoverbooksurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpideyBritishHardcoverBooks/"
  private spideypaperbackbooksurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpideyPaperbackBooks/"
  private spideysatellitetitlesurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpideySatelliteTitles/"
  private spideysmallbooksurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SpideySmallBooks/"
  private stanleeurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/StanLee/"
  private stevelevinesmarveltalesurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SteveLevinesMarvelTales/"
  private stevelevinesoneshotsminiseriesurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SteveLevinesOneShotsMiniseries/"
  private stevelevinesoversizedspidermanmagazinesurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SteveLevinesOversizedSpiderManMagazines/"
  private stevelevinesspidermanrecordsvinylsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SteveLevinesSpiderManRecordsVinyls/"
  private stevelevinesspideykidsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SteveLevinesSpideyKids/"
  private stevelevinestribcomicbooksurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SteveLevinesTribComicBooks/"
  private sundaybulletinsundaystripsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/SundayBulletinSundayStrips/"
  private toybizkooltoysgiveawaysurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/ToyBizKoolToysGiveaways/"
  private toyfaremagazineurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/ToyfareMagazine/"
  private trademagazinesurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/TradeMagazines/"
  private ultimatespidermanandulturl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/UltimateSpiderManandUlt/"
  private webofspidermanandannualsurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/WebofSpiderManandAnnuals/"
  private webspinnersurl = "https://backend-deploy-ljkpxx3zga-uw.a.run.app/Webspinners/"


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
