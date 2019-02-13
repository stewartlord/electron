/// <reference path="../electron.d.ts" />

 /**
 * This file augments the Electron TS namespace with the internal APIs
 * that are not documented but are used by Electron internally
 */

declare namespace Electron {
  interface App {
    setVersion(version: string): void;
    setDesktopName(name: string): void;
    setAppPath(path: string | null): void;
  }

  const deprecate: ElectronInternal.DeprecationUtil;
}

declare namespace ElectronInternal {
  type DeprecationHandler = (message: string) => void;
  interface DeprecationUtil {
    setHandler(handler: DeprecationHandler): void;
    getHandler(): DeprecationHandler | null;
    warn(oldName: string, newName: string): void;
    log(message: string): void;
    function(fn: Function, newName: string): Function;
    event(emitter: NodeJS.EventEmitter, oldName: string, newName: string): void;
    removeProperty<T, K extends (keyof T & string)>(object: T, propertyName: K): T;
    renameProperty<T, K extends (keyof T & string)>(object: T, oldName: string, newName: K): T;

    promisify<T extends (...args: any) => any>(fn: T): T;
  }
}
