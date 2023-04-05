import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import cytoscape from 'cytoscape';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements AfterViewInit {
  @ViewChild('network', {static: false}) network: ElementRef;
  cy: cytoscape.Core;

  constructor() { }

  ngAfterViewInit() {
    this.cy = cytoscape({
      container: this.network.nativeElement,

      boxSelectionEnabled: false,

      style: [
        {
          selector: 'node',
          css: {
            'content': 'data(id)',
            'text-valign': 'center',
            'text-halign': 'center',
            'label': 'data(name)'
          }
        },
        {
          selector: ':parent',
          css: {
            'text-valign': 'top',
            'text-halign': 'center',
            'label': 'data(name)'
          }
        },
        {
          selector: 'edge',
          css: {
            'width': 'data(width)',
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            'label': 'data(name)'
          }
        }
      ],

      elements: {
        nodes: [
          { data: { id: 'i1', name: 'Treatment Depth' }, position: { x: 10, y: 10} },
          { data: { id: 'i2', name: 'Penetration Depth' }, position: { x: 90, y: 10} },
          { data: { id: 'C1', name: 'Maximum' } },
          { data: { id: 'iC1.1', name: 'i:maxA', parent: 'C1' }, position: { x: 10, y: 100} },
          { data: { id: 'iC1.2', name: 'i:maxB', parent: 'C1' }, position: { x: 90, y: 100} },
          { data: { id: 'oC1', name: 'o:maxV', parent: 'C1' }, position: { x: 50, y: 150} },
          { data: { id: 'C2', name: 'Cascade2' } },
          { data: { id: 'iC2.1', name: 'i:funA', parent: 'C2' }, position: { x: 20, y: 250} },
          { data: { id: 'iC2.2', name: 'i:funB', parent: 'C2' }, position: { x: 100, y: 250} },
          { data: { id: 'oC2', name: 'o:funV', parent: 'C2' }, position: { x: 60, y: 300} },
        ],
        edges: [
          { data: { id: 'i1-iC1.1', name: '', source: 'i1', target: 'iC1.1', width: 1 } },
          { data: { id: 'i2-iC1.1', name: '', source: 'i2', target: 'iC1.2', width: 1 } },
          { data: { id: 'oC1-iC2.1', name: '', source: 'oC1', target: 'iC2.1', width: 1 } },
        ]
      },

      layout: {
        name: 'preset',
        padding: 5
      }
    });
  }
}