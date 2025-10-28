export * from '../core/Matter.js';

export * as Axes from '../geometry/Axes.js';
export * as Bodies from '../factory/Bodies.js';
export * as Body from '../body/Body.js';
export * as Bounds from '../geometry/Bounds.js';
export * as Collision from '../collision/Collision.js';
export * as Common from '../core/Common.js';
export * as Composite from '../body/Composite.js';
export * as Composites from '../factory/Composites.js';
export * as Constraint from '../constraint/Constraint.js';
export * as Contact from '../collision/Contact.js';
export * as Detector from '../collision/Detector.js';
export * as Engine from '../core/Engine.js';
export * as Events from '../core/Events.js';
export * as Grid from '../collision/Grid.js';
export * as Mouse from '../core/Mouse.js';
export * as MouseConstraint from '../constraint/MouseConstraint.js';
export * as Pair from '../collision/Pair.js';
export * as Pairs from '../collision/Pairs.js';
export * as Plugin from '../core/Plugin.js';
export * as Query from '../collision/Query.js';
export * as Render from '../render/Render.js';
export * as Resolver from '../collision/Resolver.js';
export * as Runner from '../core/Runner.js';
export * as SAT from '../collision/SAT.js';
export * as Sleeping from '../core/Sleeping.js';
export * as Svg from '../geometry/Svg.js';
export * as Vector from '../geometry/Vector.js';
export * as Vertices from '../geometry/Vertices.js';
export * as World from '../body/World.js';

// temporary back compatibility
module.exports.Engine.run = module.exports.Runner.run;
// module.exports.Common.deprecated(module.exports.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');
