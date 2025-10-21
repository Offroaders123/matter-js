/**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/

import * as Composite from './Composite.js';
import * as Common from '../core/Common.js';

    /**
     * See above, aliases for back compatibility only
     */
    export const create = Composite.create;
    export const add = Composite.add;
    export const remove = Composite.remove;
    export const clear = Composite.clear;
    export const addComposite = Composite.addComposite;
    export const addBody = Composite.addBody;
    export const addConstraint = Composite.addConstraint;
