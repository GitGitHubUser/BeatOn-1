import { Component, OnInit } from '@angular/core';
import { HostMessageService } from '../services/host-message.service';
import { HostDownloadStatus} from '../models/HostDownloadStatus';

@Component({
  selector: 'app-download-indicator',
  templateUrl: './download-indicator.component.html',
  styleUrls: ['./download-indicator.component.scss']
})
export class DownloadIndicatorComponent implements OnInit {

  constructor(private msgSvc: HostMessageService) { }

  downloads : HostDownloadStatus = { Downloads: []};

  ngOnInit() {
    this.msgSvc.downloadStatusMessage.subscribe((ev : HostDownloadStatus) => {
        console.log("got download update status message");
        this.downloads = ev;
    });
  }

}