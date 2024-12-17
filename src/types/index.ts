export interface CircuitBreaker {
  id: string;
  name: string;
  model: string;
  rating: string;
  status: 'active' | 'inactive' | 'maintenance';
}

export interface CommandControl {
  id: string;
  name: string;
  type: string;
  connectedTo: string[];
}

export interface Motor {
  id: string;
  name: string;
  power: string;
  rpm: number;
  status: 'running' | 'stopped' | 'fault';
}

export interface Parameter {
  id: string;
  name: string;
  value: string | number;
  unit: string;
  componentId: string;
  componentType: 'cb' | 'fk' | 'motor';
}