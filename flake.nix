{
  description = "Yosh-flake based on Node.js development environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  # inputs.flake-utils.url = "github:numtide/flake-utils";

  outputs = {self, nixpkgs }:
  let
    overlays = [
      (final: prev: rec {
        nodejs = prev.nodejs-16_x;
        prisma = prev.nodePackages.prisma;
        typescriptlang = prev.nodePackages.typescript-language-server;
        nextjs-serve = prev.nodePackages.serve;
        prettier = prev.nodePackages.prettier;
        vscode-eslint = prev.nodePackages_latest.vscode-langservers-extracted;
       })
    ];
    supportedSystems = ["x86_64-linux" "aarch64-linux" "x86_64-darwin" "aarch64-darwin"];

    forEachSupportedSystem = f: nixpkgs.lib.genAttrs supportedSystems (system: f{
      pkgs = import nixpkgs { 
        inherit overlays system;
        config = {
          permittedInsecurePackages = [ "nodejs-16.20.2" ];
        };
      };
    });
  in
  {
    devShells = forEachSupportedSystem ({ pkgs } : {
      default = pkgs.mkShell {
        packages = with pkgs; [
          node2nix 
          nodejs
          corepack 
          prisma
          typescriptlang
          nextjs-serve
          prettier
          vscode-eslint
        ];
        shellHook = with pkgs; ''
          export PRISMA_MIGRATION_ENGINE_BINARY="${prisma-engines}/bin/migration-engine"
          export PRISMA_QUERY_ENGINE_BINARY="${prisma-engines}/bin/query-engine"
          export PRISMA_QUERY_ENGINE_LIBRARY="${prisma-engines}/lib/libquery_engine.node"
          export PRISMA_INTROSPECTION_ENGINE_BINARY="${prisma-engines}/bin/introspection-engine"
          export PRISMA_FMT_BINARY="${prisma-engines}/bin/prisma-fmt"
        '';
      };
    });
  };
}
