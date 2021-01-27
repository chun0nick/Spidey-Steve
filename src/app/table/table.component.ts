import { Component, OnInit, ViewChild } from '@angular/core'
import { ComicDataService } from '../comic-data-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  dataSource : MatTableDataSource<Comic>;
  displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Appearance", "Image"];
  spreadsheet;
  video;
  name;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private comicData : ComicDataService, public dialog: MatDialog, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.route.data.subscribe(v => {
      if (v.spread === "app") {
        this.comicData.getAppearances().subscribe((apps) => {
          this.name = "Appearances";
          // this.video = 'assets/Appearances S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      } else if (v.spread == "asm") {
        this.comicData.getASM().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Grade", "Publisher", "Note", "Image"];
          this.name = "ASM 1-700";
          // this.video = 'assets/ASM #1-700 S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      } else if (v.spread == "boxed") {
        this.comicData.getboxedtoys().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Image"];
          this.name = "Boxed Toys";
          // this.video = 'assets/ASM #1-700 S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      } else if (v.spread == "showcase") {
        this.comicData.getshowcasetoys().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];
          this.name = "Showcase Toys";
          // this.video = 'assets/ASM #1-700 S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      } else if (v.spread == "grail") {
        this.comicData.getgrailtoys().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];
          this.name = "Grail Toys";
          // this.video = 'assets/ASM #1-700 S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      } else if (v.spread == "largegiveaway") {
        this.comicData.getlargeGiveAway().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];
          this.name = "Large Giveaways";
          // this.video = 'assets/ASM #1-700 S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      } else if (v.spread == "comicgiveaway") {
        this.comicData.getcomicGiveAway().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Sponsor", "Note", "Image"];
          this.name = "Large Giveaways";
          // this.video = 'assets/ASM #1-700 S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      } else if (v.spread == "raregiveaway") {
        this.comicData.getrareGiveAway().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];
          this.name = "Rare Giveaways";
          // this.video = 'assets/ASM #1-700 S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      } else if (v.spread == "smallgiveaway") {
        this.comicData.getsmallGiveAway().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];
          this.name = "Small Giveaways";
          // this.video = 'assets/ASM #1-700 S. Levine.mp4';
          this.dataSource = new MatTableDataSource(apps);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          })
      } else if (v.spread == 'asmappearancesinmagazines') {
        this.comicData.getASMAppearancesinMagazines().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Volume", "Publisher", "Note", "Image"];
        this.name = "ASM Appearances in Magazines";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'asmearlyunslabbedappearances') {
        this.comicData.getASMEarlyUnslabbedAppearances().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Appearance", "Note", "Image"];
        this.name = "ASM Early Unslabbed Appearances";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'asmhighvalueappearancescgc') {
        this.comicData.getASMHighValueAppearancesCGC().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Volume", "Note", "Image"];
        this.name = "ASM High Value Appearances - CGC";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'cerealfoodboxesandcalendars') {
        this.comicData.getCerealFoodBoxesandCalendars().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Cereal Food Boxes and Calendars";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'comestolifebooksandreader') {
        this.comicData.getComesToLifeBooksandReader().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Image"];
        this.name = "Comes To Life Books and Reader";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'comicon') {
        this.comicData.getComicon().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Volume", "Year", "Image"];  
        this.name = "Comicon";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'crackedcrazyandmadmag') {
        this.comicData.getCrackedCrazyandMadMag().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Appearance", "Image"];  
        this.name = "Cracked, Crazy and Mad Mag";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'electriccompanymagazinescomplete') {
        this.comicData.getElectricCompanyMagazinesComplete().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Electric Company Magazines - Complete";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'fanzines') {
        this.comicData.getFanzines().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Appearance", "Note", "Image"];  
        this.name = "Fanzines";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'giantsizebooksorig') {
        this.comicData.getGiantSizeBooksOrig().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Giant-Size Books (Orig. Buy)";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'giantsizedcoloringbooksanditems') {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.comicData.getGiantSizedColoringBooksandItems().subscribe((apps) => {
        this.name = "Giant-Sized Coloring Books and Items";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'handbookmarveluniverse') {
        this.comicData.getHandbookMarvelUniverse().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Image"];  
        this.name = "Handbook Marvel Universe";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'marvelageannpreview') {
        this.comicData.getMarvelAgeAnnPreview().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Marvel Age-Ann-Preview";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'marvelteamupuk') {
        this.comicData.getMarvelTeamUpUK().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Image"];  
        this.name = "Marvel Team-Up (UK)";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'marvelteamup') {
        this.comicData.getMarvelTeamUp().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Marvel Team-Up";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'mightyworldofmarveluk') {
        this.comicData.getMightyWorldofMarvelUK().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Image"];  
        this.name = "Mighty World of Marvel (UK)";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'nude') {
        this.comicData.getNude().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Appearance", "Note", "Image"];  
        this.name = "Nude";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'officialhandbookmarveluniverse') {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Image"];  
        this.comicData.getOfficialHandbookMarvelUniverse().subscribe((apps) => {
        this.name = "Official Handbook Marvel Universe";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'officialhandbooksmarveluniverseall') {
        this.comicData.getOfficialHandbooksMarvelUniverseALL().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Official Handbooks Marvel Universe - ALL";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'peterparkerspectacularspiderman') {
        this.comicData.getPeterParkerSpectacularSpiderman().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Peter Parker Spectacular Spiderman";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'peterparkerspidermanvol') {
        this.comicData.getPeterParkerSpiderManVol().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Peter Parker Spider-Man Vol 2";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'salestoastonishmegamarveldealercatalogs') {
        this.comicData.getSalesToAstonishMegaMarvelDealerCatalogs().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Sales To Astonish-Mega Marvel -Dealer Catalogs";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'sensationalspiderman') {
        this.comicData.getSensationalSpiderMan().subscribe((apps) => {
        this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Sensational Spider-Man";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spectacularspidermanannuals') {
        this.comicData.getSpectacularSpidermanAnnuals().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spectacular Spiderman Annuals";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spidergirl') {
        this.comicData.getSpiderGirl().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spider-Girl";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spidermancomicsweeklyuk') {
        this.comicData.getSpiderManComicsWeeklyUK().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spider-Man Comics Weekly (UK)";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spidermanflipbooks') {
        this.comicData.getSpiderManFlipbooks().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spider-Man Flipbooks";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spidermangottliebpinballbooks') {
        this.comicData.getSpiderManGottliebPinballBooks().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spider-Man Gottlieb Pinball Books";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spidermanoffbeatrareitems') {
        this.comicData.getSpiderManOffBeatRareItems().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spider-Man Off-Beat Rare Items ";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spidermantpbgraphicnovelspbandhc') {
        this.comicData.getSpiderManTPBGraphicNovelsPBandHC().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Appearance", "Note", "Image"];  
        this.name = "Spider-Man TPB, Graphic Novels, PB and HC";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spidermanuksummer_wintsps') {
        this.comicData.getSpiderManUKSummer_WintSps().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spider-Man UK Summer_Wint Sps";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spiderman1990mcfarlane') {
        this.comicData.getSpiderman1990McFarlane().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spiderman 1990 (McFarlane)";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spiderman30centvariants') {
        this.comicData.getspiderman30centvariants().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Note", "Image"];  
        this.name = "spiderman 30 cent variants";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spidermancassettes') {
        this.comicData.getSpidermanCassettes().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spiderman Cassettes";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spideybritishhardcoverbooks') {
        this.comicData.getSpideyBritishHardcoverBooks().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spidey British Hardcover Books";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spideypaperbackbooks') {
        this.comicData.getSpideyPaperbackBooks().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spidey Paperback Books";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spideysatellitetitles') {
        this.comicData.getSpideySatelliteTitles().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spidey Satellite Titles";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'spideysmallbooks') {
        this.comicData.getSpideySmallBooks().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Spidey Small Books";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'stanlee') {
        this.comicData.getStanLee().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Appearance", "Note", "Image"];  
        this.name = "Stan Lee";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'stevelevinesmarveltales') {
        this.comicData.getSteveLevinesMarvelTales().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Appearance", "Note", "Image"];  
        this.name = "Steve Levine's Marvel Tales";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'stevelevinesoneshotsminiseries') {
        this.comicData.getSteveLevinesOneShotsMiniseries().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Steve Levine's One-Shots & Miniseries";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'stevelevinesoversizedspidermanmagazines') {
        this.comicData.getSteveLevinesOversizedSpiderManMagazines().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Appearance", "Note", "Image"];  
        this.name = "Steve Levine's Oversized Spider-Man Magazines";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'stevelevinesspidermanrecordsvinyls') {
        this.comicData.getSteveLevinesSpiderManRecordsVinyls().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];  
        this.name = "Steve Levine's Spider-Man Records & Vinyls";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'stevelevinesspideykids') {
        this.comicData.getSteveLevinesSpideyKids().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Steve Levine's Spidey Kids";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'stevelevinestribcomicbooks') {
        this.comicData.getSteveLevinesTribComicBooks().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Steve Levine's Trib Comic Books";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'sundaybulletinsundaystrips') {
        this.comicData.getSundayBulletinSundayStrips().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Image"];  
        this.name = "Sunday Bulletin Sunday Strips";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'toybizkooltoysgiveaways') {
        this.comicData.getToyBizKoolToysGiveaways().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Appearance", "Note", "Image"];  
        this.name = "ToyBiz & Kool Toys Giveaways";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'toyfaremagazine') {
        this.comicData.getToyfareMagazine().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];  
        this.name = "Toyfare Magazine";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'trademagazines') {
        this.comicData.getTradeMagazines().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Year", "Publisher", "Note", "Image"];
        this.name = "Trade Magazines";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'ultimatespidermanandult') {
        this.comicData.getUltimateSpiderManandUlt().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Year", "Publisher", "Note", "Image"];
        this.name = "Ultimate Spider-Man and Ult. Sp. Team-Up";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'webofspidermanandannuals') {
        this.comicData.getWebofSpiderManandAnnuals().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Publisher", "Note", "Image"];
        this.name = "Web of Spider-Man and Annuals";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        } else if (v.spread == 'webspinners') {
        this.comicData.getWebspinners().subscribe((apps) => {
          this.displayedColumns = ["ID", "Title", "Volume", "Image"];
        this.name = "Webspinners";
        this.dataSource = new MatTableDataSource(apps);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        })
        }
    });

}
  openDialog(name: string, volume : string, url: string) {
    let dialogRef = this.dialog.open(ImageDialogComponent);
    dialogRef.componentInstance.name = name + ' ' + volume;
    dialogRef.componentInstance.url = url;
  }
  fixrow(row : Comic) {
    row.Image_URL = 'home/soon.jpg';
  }
}



export interface Comic{
  ID: string;
  Title: number;
  Volume: string;
  Year: string;
  Publisher: string;
  Sponsor: string;
  Note: string;
  Appearance: string;
  Box: string;
  Value: string;
  Image_URL: string;
}
