import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

interface Note {
  title: string;
  content: string;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    CommonModule
  ]
})
export class NoteComponent {
  public noteTitle = '';
  public noteContent = '';
  public notes: Note[] = [];

  public titleInvalid = false;
  public contentInvalid = false;

  public validateTitle() {
    this.titleInvalid = this.noteTitle.length < 5;
  }

  public validateContent() {
    this.contentInvalid = this.noteContent.length < 7;
  }

  public saveNote() {
    if (!this.titleInvalid && !this.contentInvalid) {
      this.notes.push({ title: this.noteTitle, content: this.noteContent });
      this.noteTitle = '';
      this.noteContent = '';
    }
  }

  public deleteNote(index: number) {
    this.notes.splice(index, 1);
  }

  public editNote(index: number) {
    this.noteTitle = this.notes[index].title;
    this.noteContent = this.notes[index].content;
    this.notes.splice(index, 1);
  }
}