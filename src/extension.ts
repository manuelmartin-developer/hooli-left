import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("hooli-left.closeAllTabsToLeft", async (uri: vscode.Uri) => {
    await vscode.window.showTextDocument(uri);
    await vscode.commands.executeCommand("workbench.action.closeEditorsToTheLeft");
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {}
