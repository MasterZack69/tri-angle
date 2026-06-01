{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs_latest
  ];

  shellHook = ''
    echo "Done"
    trap 'echo "Done"' EXIT
  '';
}
