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
            'text-halign': 'center'
          }
        },
        {
          selector: ':parent',
          css: {
            'text-valign': 'top',
            'text-halign': 'center',
          }
        },
        {
          selector: 'edge',
          css: {
            'width': 'data(width)',
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle'
          }
        }
      ],

      elements: {
        nodes: [
          { data: { id: 'C1' } },
          { data: { id: 'iC1.1', parent: 'C1' }, position: { x: 10, y: 10} },
          { data: { id: 'iC1.2', parent: 'C1' }, position: { x: 90, y: 10} },
          { data: { id: 'oC1', parent: 'C1' }, position: { x: 50, y: 50} },
          { data: { id: 'C2' } },
          { data: { id: 'iC2.1', parent: 'C2' }, position: { x: 20, y: 150} },
          { data: { id: 'iC2.2', parent: 'C2' }, position: { x: 100, y: 150} },
          { data: { id: 'oC2', parent: 'C2' }, position: { x: 60, y: 200} },
        ],
        edges: [
          { data: { id: 'oC1-iC2.1', source: 'oC1', target: 'iC2.1', width: 1 } },
        ]
      },

      layout: {
        name: 'preset',
        padding: 5
      }
    });
  }
}