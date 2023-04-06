import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import cytoscape from 'cytoscape';
import elk from 'cytoscape-elk';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css'],
})
export class NetworkComponent implements AfterViewInit {
  @ViewChild('network', { static: false }) network: ElementRef;
  cy: cytoscape.Core;

  constructor() {}

  ngAfterViewInit() {
    cytoscape.use(elk);
    this.cy = cytoscape({
      container: this.network.nativeElement,

      boxSelectionEnabled: false,

      style: [
        {
          selector: 'node',
          css: {
            content: 'data(id)',
            'text-valign': 'center',
            'text-halign': 'center',
            label: 'data(name)',
            'font-size': '12rem',
          },
        },
        {
          selector: ':parent',
          css: {
            'text-valign': 'top',
            'text-halign': 'center',
            label: 'data(name)',
            'font-size': '15rem',
          },
        },
        {
          selector: 'edge',
          css: {
            width: 'data(width)',
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            label: 'data(name)',
          },
        },
      ],

      elements: {
        // nodes: [
        //   {
        //     data: { id: 'i1', name: 'Treatment Depth' },
        //     position: { x: 10, y: 10 },
        //   },
        //   {
        //     data: { id: 'i2', name: 'Penetration Depth' },
        //     position: { x: 90, y: 10 },
        //   },
        //   { data: { id: 'C1', name: 'Maximum' } },
        //   {
        //     data: { id: 'iC1.1', name: 'i:maxA', parent: 'C1' },
        //     position: { x: 10, y: 100 },
        //   },
        //   {
        //     data: { id: 'iC1.2', name: 'i:maxB', parent: 'C1' },
        //     position: { x: 90, y: 100 },
        //   },
        //   {
        //     data: { id: 'oC1', name: 'o:maxV', parent: 'C1' },
        //     position: { x: 50, y: 150 },
        //   },
        //   { data: { id: 'C2', name: 'Cascade2' } },
        //   {
        //     data: { id: 'iC2.1', name: 'i:funA', parent: 'C2' },
        //     position: { x: 20, y: 250 },
        //   },
        //   {
        //     data: { id: 'iC2.2', name: 'i:funB', parent: 'C2' },
        //     position: { x: 100, y: 250 },
        //   },
        //   {
        //     data: { id: 'oC2', name: 'o:funV', parent: 'C2' },
        //     position: { x: 60, y: 300 },
        //   },
        // ],
        nodes: [
          { data: { id: 'i1', name: 'Treatment Depth' } },
          { data: { id: 'i2', name: 'Penetration Depth' } },
          { data: { id: 'C1', name: 'Maximum' } },
          { data: { id: 'iC1.1', name: 'i:maxA', parent: 'C1' } },
          { data: { id: 'iC1.2', name: 'i:maxB', parent: 'C1' } },
          { data: { id: 'oC1', name: 'o:maxV', parent: 'C1' } },
          { data: { id: 'i3', name: 'Input 3' } },
          { data: { id: 'C2', name: 'Cascade2' } },
          { data: { id: 'iC2.1', name: 'i:funA', parent: 'C2' } },
          { data: { id: 'iC2.2', name: 'i:funB', parent: 'C2' } },
          { data: { id: 'oC2', name: 'o:funV', parent: 'C2' } },
          { data: { id: 'i4', name: 'Input 4' } },
          { data: { id: 'i5', name: 'Input 5' } },
          { data: { id: 'C3', name: 'Cascade3' } },
          { data: { id: 'iC3.1', name: 'i:funA', parent: 'C3' } },
          { data: { id: 'iC3.2', name: 'i:funB', parent: 'C3' } },
          { data: { id: 'oC3', name: 'o:funV', parent: 'C3' } },
        ],
        edges: [
          {
            data: {
              id: 'i1-iC1.1',
              name: '',
              source: 'i1',
              target: 'iC1.1',
              width: 1,
            },
          },
          {
            data: {
              id: 'i2-iC1.1',
              name: '',
              source: 'i2',
              target: 'iC1.2',
              width: 1,
            },
          },
          {
            data: {
              id: 'oC1-iC2.1',
              name: '',
              source: 'oC1',
              target: 'iC2.1',
              width: 1,
            },
          },
          {
            data: {
              id: 'i3-iC2.1',
              name: '',
              source: 'i3',
              target: 'iC2.2',
              width: 1,
            },
          },
          {
            data: {
              id: 'i4-iC3.1',
              name: '',
              source: 'i4',
              target: 'iC3.1',
              width: 1,
            },
          },
          {
            data: {
              id: 'i5-iC3.1',
              name: '',
              source: 'i5',
              target: 'iC3.2',
              width: 1,
            },
          },
        ],
      },

      layout: {
        name: 'elk',
        fit: true, // whether to fit the viewport to the graph
        spacingFactor: 2, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
      },
    });
  }
}
