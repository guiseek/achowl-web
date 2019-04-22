import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { BandService } from '../../../core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'owl-musician-band-repertoire-page',
  templateUrl: './musician-band-repertoire-page.component.html',
  styleUrls: ['./musician-band-repertoire-page.component.scss']
})
export class MusicianBandRepertoirePageComponent implements OnInit {
  repertoireForm = this.fb.group({
    id: [null, Validators.required],
    repertoire: this.fb.array([])
  })
  newSongForm = this.fb.group({
    artist: [null, Validators.required],
    song: [null, Validators.required]
  })
  constructor(
    private service: BandService,
    private fb: FormBuilder,
    private snack: MatSnackBar
  ) { }
  get id(): FormControl {
    return this.repertoireForm.get('id') as FormControl
  }
  get repertoire() {
    return this.repertoireForm.get('repertoire') as FormArray
  }

  ngOnInit() {
    this.service.currentBand$.subscribe(band => {
      console.log('band: ', band)
      // this.repertoireForm.patchValue(band)
      let { id, repertoire } = band
      this.id.patchValue(id)
      this.clearFormArray(this.repertoire)
      if (band.repertoire && !!repertoire.length) {
        repertoire.forEach((music, i) => {
          console.log(music)
          this.repertoire.insert(i, this.createItem(music))
          // console.log()
          // this.addItem(music)
        })
      }
    })
  }
  clearFormArray(formArray: FormArray) {
    while (formArray.length !== 0) {
      formArray.removeAt(0)
    }
  }
  addSong() {
    this.addItem(this.newSongForm.value)
    this.newSongForm.reset()
  }
  createItem({ artist, song }) {
    return this.fb.group({
      artist: [artist],
      song: [song]
    })
    // return this.fb.control(item)
  }
  addItem(item?) {
    this.repertoire.push(
      this.createItem(item)
    )
    this.save()
  }
  save() {
    console.log(this.repertoireForm.value)
    setTimeout(() => {
      this.service.saveRepertoire(
        this.repertoireForm.value
      ).then(() => {
        console.info('salvo')
        this.snack.open('Repertório salvo', 'Fechar', {
          duration: 3000
        })
      })
    }, 2000)

  }
  onMusicAdded(music) {
    
  }
}
